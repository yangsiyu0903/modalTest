import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';
import { YConfirmationBoxComponent } from './y-confirmation-box/y-confirmation-box.component';
import {YPromptBoxComponent} from "./y-prompt-box/y-prompt-box.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    YConfirmationBoxComponent,
    YPromptBoxComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
