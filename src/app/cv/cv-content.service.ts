import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { CvContent } from './cv.model';

@Injectable({
  providedIn: 'root',
})
export class CvContentService {
  private readonly cv$: Observable<CvContent>;

  constructor(private readonly http: HttpClient) {
    // Source of truth: editable JSON under `src/assets/cv/`.
    this.cv$ = this.http
      .get<CvContent>('assets/cv/es.json')
      .pipe(shareReplay(1));
  }

  getCvContent(): Observable<CvContent> {
    return this.cv$;
  }
}

