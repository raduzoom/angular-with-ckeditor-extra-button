import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { HtmlEditorComponent } from './app/components/html-editor/html-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HtmlEditorComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <ack-html-editor></ack-html-editor>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
