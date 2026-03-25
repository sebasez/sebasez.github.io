import { Component, OnInit, inject } from '@angular/core';

import { CvContentService } from '../../cv/cv-content.service';

@Component({
  selector: 'app-knowledge',
  standalone: false,
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {
  private readonly cvContentService = inject(CvContentService);
  readonly cv$ = this.cvContentService.getCvContent();

  ngOnInit() {
  }

}
