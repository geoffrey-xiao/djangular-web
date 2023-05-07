import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TriviaComponent } from './trivia/trivia.component';
import { TriviaService } from './trivia/trivia.service';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { MatRadioModule } from '@angular/material/radio';
@NgModule({
  declarations: [AppComponent, TriviaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule,
    MatRadioModule,
  ],
  providers: [TriviaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
