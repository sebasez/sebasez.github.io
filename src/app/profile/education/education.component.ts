import { Component, OnInit, inject } from '@angular/core';

import { CvContentService } from '../../cv/cv-content.service';

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  private readonly cvContentService = inject(CvContentService);
  readonly cv$ = this.cvContentService.getCvContent();

  ngOnInit() {
  }

}
