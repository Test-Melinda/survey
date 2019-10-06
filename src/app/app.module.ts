import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { ScoreViewerComponent } from './score-viewer/score-viewer.component';
import { SurveyIntroComponent } from './survey-intro/survey-intro.component';
import { JsonTranslationLoader } from './i18n/json-translation-loader';

@NgModule({
  declarations: [
    AppComponent,
    ScoreViewerComponent,
    SurveyIntroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useClass: JsonTranslationLoader
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
