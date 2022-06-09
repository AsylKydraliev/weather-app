import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { WeatherDataModel } from '../models/weatherData.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  themeDark = 'theme-dark';
  theme = 'theme';

  constructor(private http: HttpClient) {}

  getCurrentWeather (city: string) {
    let lang: string;
    if(localStorage.getItem('lang') === 'ru') {
      lang = 'ru';
    } else {
      lang = 'en';
    }
    return this.http.get<WeatherDataModel>(
      environment.weatherApi + city + environment.weatherApiParams + '&lang=' + lang
    );
  }

  addThemeDataToLocalStorage(themeStatus: boolean) {
    if(!themeStatus && localStorage.getItem(this.theme) === this.themeDark) {
      localStorage.removeItem(this.theme);
    } else {
      localStorage.setItem(this.theme, this.themeDark);
    }
    this.addClassToBody();
  }

  addClassToBody () {
    const body: any = document.querySelector('body');
    if(localStorage.getItem(this.theme) === this.themeDark) {
      body.classList.add(this.themeDark);
      localStorage.setItem('themeStatus', 'true');
    } else {
      body.classList.remove(this.themeDark);
      localStorage.setItem('themeStatus', 'false');
    }
  }
}
