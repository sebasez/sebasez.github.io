import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  selectedLanguage = 'es';

  constructor(private translateService: TranslateService) {
      this.translateService.setDefaultLang(this.selectedLanguage);
      this.translateService.use(this.selectedLanguage);
  }

  toogleLanguage(lang: string) {
      this.translateService.use(lang);
      console.log(lang);
  }

  ngOnInit() {
  }

}
