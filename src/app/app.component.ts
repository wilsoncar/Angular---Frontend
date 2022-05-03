import { Component } from '@angular/core';

export type EditorType = 'registro' | 'IsActive' | 'InicioSesion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appweb';

  editor: EditorType = 'InicioSesion';

  get showregistro() {
    return this.editor = 'registro';
  }

  get showIsActive() {
    return this.editor ='IsActive';
  }

  get showInicioSesion() {
    return this.editor = 'InicioSesion';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
