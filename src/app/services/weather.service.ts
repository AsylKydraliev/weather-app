import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { WeatherDataModel } from '../models/weatherData.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

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
}
