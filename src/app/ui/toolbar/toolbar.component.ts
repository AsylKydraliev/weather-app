import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  chooseEn(event: Event) {
    event.preventDefault();
    localStorage.setItem('lang', 'en');
  }

  chooseRu(event: Event) {
    event.preventDefault();
    localStorage.setItem('lang', 'ru');
  }
}
