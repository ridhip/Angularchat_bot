import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WelcomepageComponent } from './welcomepage.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [WelcomepageComponent],
  exports: [ WelcomepageComponent]
})
export class WelcomepageModule { }
