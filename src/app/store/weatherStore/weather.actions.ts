import { createAction, props } from '@ngrx/store';
import { WeatherDataModel } from '../../models/weatherData.model';

export const fetchWeatherRequest = createAction(
  '[Weather] Fetch Request',
props<{city: string}>()
);
export const fetchWeatherSuccess = createAction(
  '[Weather] Fetch Success',
  props<{weatherData: WeatherDataModel}>()
);
export const fetchWeatherFailure = createAction(
  '[Weather] Fetch Failure',
  props<{error: string}>()
);
