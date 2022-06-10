import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(private translate: TranslateService) {}

  chooseEn() {
    this.translate.use('en');
    localStorage.setItem('lang', 'en');
  }

  chooseRu() {
    this.translate.use('ru');
    localStorage.setItem('lang', 'ru');
  }
}
