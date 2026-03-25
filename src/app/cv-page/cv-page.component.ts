import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { map } from 'rxjs/operators';

import { CvContentService } from '../cv/cv-content.service';

@Component({
  selector: 'app-cv-page',
  standalone: false,
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.css'],
})
export class CvPageComponent {
  @ViewChild('cvSheet') private cvSheet?: ElementRef<HTMLElement>;

  private readonly cvContentService = inject(CvContentService);
  isGeneratingPdf = false;
  readonly cv$ = this.cvContentService.getCvContent();
  readonly cvView$ = this.cv$.pipe(
    map((cv) => ({
      ...cv,
      info: {
        ...cv.info,
        showPhone: this.normalizeBoolean(cv.info.showPhone, true),
      },
      experience: cv.experience.map((job) => ({
        ...job,
        descriptionLines: this.splitDescription(job.description),
      })),
    }))
  );
  private splitDescription(description: string): string[] {
    return description
      .split('.')
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line) => `${line}.`);
  }

  private normalizeBoolean(value: boolean | string | undefined, defaultValue: boolean): boolean {
    if (typeof value === 'boolean') {
      return value;
    }

    if (typeof value === 'string') {
      const normalized = value.trim().toLowerCase();

      if (normalized === 'false') {
        return false;
      }

      if (normalized === 'true') {
        return true;
      }
    }

    return defaultValue;
  }

  async downloadPdf(name: string): Promise<void> {
    if (this.isGeneratingPdf || !this.cvSheet) {
      return;
    }

    this.isGeneratingPdf = true;

    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import('html2canvas'),
        import('jspdf'),
      ]);

      const documentElement = this.cvSheet.nativeElement;
      const canvas = await html2canvas(documentElement, {
        backgroundColor: '#ffffff',
        ignoreElements: (element) => element.classList.contains('cvNoPdf'),
        scale: 2,
        useCORS: true,
      });

      const imageData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 8;
      const imageWidth = pageWidth - margin * 2;
      const imageHeight = (canvas.height * imageWidth) / canvas.width;

      let heightLeft = imageHeight;
      let position = margin;

      pdf.addImage(imageData, 'PNG', margin, position, imageWidth, imageHeight, undefined, 'FAST');
      heightLeft -= pageHeight - margin * 2;

      while (heightLeft > 0) {
        position = margin + heightLeft - imageHeight;
        pdf.addPage();
        pdf.addImage(imageData, 'PNG', margin, position, imageWidth, imageHeight, undefined, 'FAST');
        heightLeft -= pageHeight - margin * 2;
      }

      pdf.save(`${this.toFileName(name)}.pdf`);
    } finally {
      this.isGeneratingPdf = false;
    }
  }

  private toFileName(name: string): string {
    return (
      name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') || 'cv'
    );
  }
}

