import { Component, OnInit, inject } from '@angular/core';

import { CvContentService } from '../../cv/cv-content.service';

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  private readonly cvContentService = inject(CvContentService);
  readonly cv$ = this.cvContentService.getCvContent();

  ngOnInit() {
  }

}
