import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material';

import { MatGridListResponsive } from './mat-grid-list-responsive.directive';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule
  ],
  declarations: [
    MatGridListResponsive
  ],
  exports: [
    MatGridListResponsive
  ]
})
export class MatGridListResponsiveModule { }
