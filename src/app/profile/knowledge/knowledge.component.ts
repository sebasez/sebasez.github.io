import { Component, OnInit } from '@angular/core';

import { CvContentService } from '../../cv/cv-content.service';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {
  readonly cv$ = this.cvContentService.getCvContent();

  constructor(private readonly cvContentService: CvContentService) {}

  ngOnInit() {
  }

}
