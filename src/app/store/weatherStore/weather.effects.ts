import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { fetchWeatherFailure, fetchWeatherRequest, fetchWeatherSuccess } from './weather.actions';
import { WeatherService } from '../../services/weather.service';

@Injectable()

export class WeatherEffects {

  constructor(
    private weatherService: WeatherService,
    private actions: Actions,
  ) {}

  fetchAlbums = createEffect(() => this.actions.pipe(
    ofType(fetchWeatherRequest),
    mergeMap(city => this.weatherService.getCurrentWeather(city.city).pipe(
      map(weatherData => fetchWeatherSuccess({weatherData})),
      catchError(() => of(fetchWeatherFailure({
        error: 'Вы ввели неверные данные'
      })))
    )
  )));
}
