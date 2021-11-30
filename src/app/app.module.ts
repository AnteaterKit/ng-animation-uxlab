import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ANIMATIONS_DURATION } from './animation/animation-tokens';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from './button/button.module';
import { ListModule } from './list/list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ListModule
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
