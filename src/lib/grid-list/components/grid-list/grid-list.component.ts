import {
  Component,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  TemplateRef,
  ElementRef
} from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';

function calCols(mqAlias: string): number {
  switch (mqAlias) {
    case 'xl':
      return 5;
    case 'lg':
      return 4;
    case 'md':
      return 3;
    case 'sm':
      return 2;
    case 'xs':
    default:
      return 1;
  }
}

@Component({
  selector: 'grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnChanges, OnDestroy {
  @Input() grid: boolean;
  @Input() data: any[];
  @Output() colsChange: EventEmitter<number> = new EventEmitter<number>();

  cols: number = 1;

  mediaChangeSubscription: Subscription;

  @ContentChild('itemTpl') itemTemplate: TemplateRef<ElementRef>;

  constructor(
    private observableMedia: ObservableMedia,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.grid.isFirstChange() || changes.grid.hasOwnProperty('previousValue')) {
      if (changes.grid.currentValue) {
        this.mediaChangeSubscription = this.observableMedia
          .subscribe((mediaChange) => {
            if (this.grid) {
              this.cols = calCols(mediaChange.mqAlias);
              this.colsChange.emit(this.cols);
            }
          });
      } else {
        this.cols = 1;
        this.colsChange.emit(this.cols);
        if (this.mediaChangeSubscription) {
          this.mediaChangeSubscription.unsubscribe();
          this.mediaChangeSubscription = undefined;
        }
      }
    }
  }

  ngOnDestroy() {
    if (this.mediaChangeSubscription) {
      this.mediaChangeSubscription.unsubscribe();
    }
  }

}