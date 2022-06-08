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
  temperatureType: boolean = false;
  weatherDataSubscription!: Subscription;

  constructor(private store: Store<AppState>) {
    this.weatherData = store.select(state => state.weatherData?.weatherData);
  }

  ngOnInit(): void {
    this.weatherDataSubscription = this.weatherData.subscribe(data => {
      this.currentWeather = data;
    });
  }

  getCelsius() {
    this.temperatureType = false;
  }

  getFahrenheit() {
    this.temperatureType = true;
  }

  ngOnDestroy() {
    this.weatherDataSubscription.unsubscribe();
  }
}
