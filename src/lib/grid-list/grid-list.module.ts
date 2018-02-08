import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatCardModule,
  MatRippleModule,
  MatGridListModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { GridListComponent } from './components/grid-list/grid-list.component';
import { GridListItemComponent } from './components/grid-list-item/grid-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatRippleModule,
    MatGridListModule,
    FlexLayoutModule,
  ],
  declarations: [
    GridListComponent,
    GridListItemComponent,
  ],
  exports: [
    GridListComponent,
    GridListItemComponent,
  ]
})
export class GridListModule { }
