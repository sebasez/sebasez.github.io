import { Component, OnInit } from '@angular/core';

import { CvContentService } from '../../cv/cv-content.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  readonly cv$ = this.cvContentService.getCvContent();

  constructor(private readonly cvContentService: CvContentService) {}

  ngOnInit() {
  }

}
