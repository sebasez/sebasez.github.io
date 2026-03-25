import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { CvContentService } from '../cv/cv-content.service';

@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.css'],
})
export class CvPageComponent {
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

  constructor(private readonly cvContentService: CvContentService) {}

  private splitDescription(description: string): string[] {
    return description
      .split('.')
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line) => `${line}.`);
  }
}

