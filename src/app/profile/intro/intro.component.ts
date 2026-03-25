import { Component, OnInit, inject } from '@angular/core';

import { CvContentService } from '../../cv/cv-content.service';

@Component({
  selector: 'app-intro',
  standalone: false,
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  private readonly cvContentService = inject(CvContentService);
  readonly cv$ = this.cvContentService.getCvContent();

  ngOnInit() {
  }

}
