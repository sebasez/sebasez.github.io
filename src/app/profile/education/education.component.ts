import { Component, OnInit } from '@angular/core';

import { CvContentService } from '../../cv/cv-content.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  readonly cv$ = this.cvContentService.getCvContent();

  constructor(private readonly cvContentService: CvContentService) {}

  ngOnInit() {
  }

}
