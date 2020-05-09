import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './profile/info/info.component';
import { IntroComponent } from './profile/intro/intro.component';
import { KnowledgeComponent } from './profile/knowledge/knowledge.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { ExperienceComponent } from './profile/experience/experience.component';
import { EducationComponent } from './profile/education/education.component';
import { ContactComponent } from './profile/contact/contact.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    IntroComponent,
    KnowledgeComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
        }
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
