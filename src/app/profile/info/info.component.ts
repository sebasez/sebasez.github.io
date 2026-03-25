import { Component, OnInit } from '@angular/core';

import { CvContentService } from '../../cv/cv-content.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  readonly cv$ = this.cvContentService.getCvContent();

  constructor(private readonly cvContentService: CvContentService) {}

  ngOnInit() {
  }

}
