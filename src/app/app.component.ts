import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isGrid = true;

  onItemClick(item: string) {
    console.debug(`onItemClick: ${item}`);
  }

  doAction(action: string, value: any) {
    console.debug(`action ${action}: ${value}`);
  }
}
