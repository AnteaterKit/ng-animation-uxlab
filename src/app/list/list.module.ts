import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ButtonModule } from '../button/button.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class ListModule { }
