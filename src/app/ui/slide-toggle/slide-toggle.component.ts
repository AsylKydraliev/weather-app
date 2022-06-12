import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent implements OnInit {

  themeStatus!: boolean;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeStatus = localStorage.getItem('themeStatus') === 'true';
  }

  changeTheme (event: Event) {
    const input = <HTMLInputElement>event.target;
    const themeValue = input.checked;
    this.themeService.addThemeDataToLocalStorage(themeValue);
  }
}
