import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ButtonModule } from '../button/button.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ANIMATIONS_DURATION } from '../animation/animation-tokens';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  declarations: [ListComponent],
  exports: [ListComponent],
  providers: [
    { provide: ANIMATIONS_DURATION, useValue:  200 }
  ]
})
export class ListModule { }
