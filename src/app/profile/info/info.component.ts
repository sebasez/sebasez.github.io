import { Component, OnInit, inject } from '@angular/core';

import { CvContentService } from '../../cv/cv-content.service';

@Component({
  selector: 'app-info',
  standalone: false,
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  private readonly cvContentService = inject(CvContentService);
  readonly cv$ = this.cvContentService.getCvContent();

  ngOnInit() {
  }

}
