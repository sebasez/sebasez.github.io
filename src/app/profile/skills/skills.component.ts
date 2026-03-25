import { Component, OnInit } from '@angular/core';

import { CvContentService } from '../../cv/cv-content.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  readonly cv$ = this.cvContentService.getCvContent();

  constructor(private readonly cvContentService: CvContentService) { }

  ngOnInit() {
  }

}
