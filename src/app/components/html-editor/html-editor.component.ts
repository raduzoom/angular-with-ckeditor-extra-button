import { Component } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
  EditorConfig,
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import { CKEDITOR_CONFIG, ExtraButton } from './html-editor-plugin';

@Component({
  selector: 'ack-html-editor',
  standalone: true,
  imports: [CKEditorModule],
  templateUrl: './html-editor.component.html',
  styleUrl: './html-editor.component.css',
})
export class HtmlEditorComponent {
  title = 'angular';

  public Editor = ClassicEditor;
  public config: EditorConfig = CKEDITOR_CONFIG;
}
