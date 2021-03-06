import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  folders = [
    { name: 'Folder 1', link: '#1' },
    { name: 'Folder 2', link: '#2' },
    { name: 'Folder 3', link: '#3' },
    { name: 'Folder 4', link: '#4' },
    { name: 'Folder 5', link: '#5' },
  ];

  responsive = true;
  cols = 1;

  setCols(cols: number): void {
    this.cols = cols;
  }
}
