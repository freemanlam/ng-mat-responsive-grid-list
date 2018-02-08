import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'grid-list-item',
  templateUrl: './grid-list-item.component.html',
  styleUrls: ['./grid-list-item.component.scss']
})
export class GridListItemComponent {
  @Input() icon: string;
  @Input() name: string;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
}