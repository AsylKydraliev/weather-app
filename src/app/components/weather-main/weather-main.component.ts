import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/types';
import { Observable, Subscription } from 'rxjs';
import { WeatherClassModel } from '../../models/weatherData.model';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.scss']
})
export class WeatherMainComponent implements OnInit, OnDestroy {

  weatherData: Observable<null | WeatherClassModel>;
  currentWeather!: WeatherClassModel | null;
  temperatureType = false;
  weatherDataSubscription!: Subscription;
  fahrenheit!: number;
  feelsFahrenheit!: number;
  minFahrenheit!: number;
  maxFahrenheit!: number;

  constructor(private store: Store<AppState>) {
    this.weatherData = store.select(state => state.weatherData?.weatherData);
  }

  ngOnInit(): void {
    this.weatherDataSubscription = this.weatherData.subscribe(data => {
      this.currentWeather = data;
    });
  }

  getFahrenheit() {
    this.temperatureType = !this.temperatureType;
    const celsius = <number>this.currentWeather?.main.temp;
    const feelsCelsius = <number>this.currentWeather?.main.feels_like;
    const minFahrenheit = <number>this.currentWeather?.main.temp_min;
    const maxFahrenheit = <number>this.currentWeather?.main.temp_max;
    this.fahrenheit = Math.ceil(celsius * 1.8 + 32);
    this.feelsFahrenheit = Math.ceil(feelsCelsius * 1.8 + 32);
    this.minFahrenheit = Math.ceil(minFahrenheit * 1.8 + 32);
    this.maxFahrenheit = Math.ceil(maxFahrenheit * 1.8 + 32);
  }

  ngOnDestroy() {
    this.weatherDataSubscription.unsubscribe();
  }
}
