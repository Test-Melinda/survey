import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ScoreViewerComponent } from './score-viewer/score-viewer.component';
import { SurveyIntroComponent } from './survey-intro/survey-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreViewerComponent,
    SurveyIntroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
