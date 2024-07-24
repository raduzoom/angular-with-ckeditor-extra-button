import { EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig';
import {
  Bold,
  ButtonView,
  Dialog,
  Essentials,
  Heading,
  icons,
  Italic,
  List,
  Paragraph,
  Plugin,
  View,
} from 'ckeditor5';

export class ExtraButton extends Plugin {
  get requires() {
    return [Dialog];
  }
  init() {
    const editor = this.editor;
    // The button must be registered among the UI components of the editor
    // to be displayed in the toolbar.
    editor.ui.componentFactory.add('extrabutton', (locale) => {
      // The button will be an instance of ButtonView.
      const button = new ButtonView();

      button.set({
        label: 'ExtraButton',
        icon: icons.importExport,
        tooltip: 'Extra Button',
      });
      // Execute a callback function when the button is clicked.
      button.on('execute', () => {
        const now = new Date();

        // Change the model using the model writer.
        editor.model.change((writer) => {
          // Insert the text at the user's current position.
          editor.model.insertContent(writer.createText(now.toString()));
        });

        const buttonView = new ButtonView(locale);
        const dialog = this.editor.plugins.get('Dialog');

        // If the button is turned on, hide the dialog.
        if (buttonView.isOn) {
          dialog.hide();
          buttonView.isOn = false;

          return;
        }

        buttonView.isOn = true;

        // Otherwise, show the dialog.
        // Create a view with some simple content. It will be displayed as a dialog's body.
        const textView = new View(locale);

        textView.setTemplate({
          tag: 'div',
          attributes: {
            style: {
              padding: 'var(--ck-spacing-large)',
              whiteSpace: 'initial',
              width: '100%',
              maxWidth: '500px',
            },
            tabindex: -1,
          },
          children: [
            'This is the content of the dialog.',
            'You can put here text, images, inputs, buttons, etc.',
          ],
        });

        // Tell the plugin to display a dialog with the title, content, and one action button.
        dialog.show({
          id: 'ceva',
          title: 'Dialog with text',
          content: textView,
          actionButtons: [
            {
              label: 'OK',
              class: 'ck-button-action',
              withText: true,
              onExecute: () => dialog.hide(),
            },
          ],
          onHide() {
            buttonView.isOn = false;
          },
        });
      });

      return button;
    });
  }
}
export const CKEDITOR_CONFIG: EditorConfig = {
  plugins: [Essentials, Paragraph, Heading, List, Bold, Italic, ExtraButton],
  toolbar: {
    items: [
      'heading',
      '|',
      'fontfamily',
      'fontsize',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'bold',
      'italic',
      'strikethrough',
      'subscript',
      'superscript',
      'code',
      '|',
      'link',
      'codeBlock',
      '|',
      'bulletedList',
      'numberedList',
      'todoList',
      'outdent',
      'indent',
      '|',
      'undo',
      'redo',
      'extrabutton',
    ],
    shouldNotGroupWhenFull: false,
  },
};
