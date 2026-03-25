import { Component, inject } from '@angular/core';
import { map } from 'rxjs/operators';

import { CvContentService } from '../cv/cv-content.service';

@Component({
  selector: 'app-cv-page',
  standalone: false,
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.css'],
})
export class CvPageComponent {
  private readonly cvContentService = inject(CvContentService);
  readonly cv$ = this.cvContentService.getCvContent();
  readonly cvView$ = this.cv$.pipe(
    map((cv) => ({
      ...cv,
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
}

