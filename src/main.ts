import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div *ngFor='let a of vals'>
  {{a[prop]}}
  </div>
  `,
})
export class App {
  name = 'Angular';
  prop = 'name';
  vals: unknown[] = [
    {
      name: '1',
    },
    {
      name: '2',
    },
    {
      name: '3',
    },
    {
      name: '4',
    },
  ];
}

bootstrapApplication(App);
