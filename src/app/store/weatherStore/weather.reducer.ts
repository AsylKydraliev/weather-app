import { createReducer, on } from '@ngrx/store';
import { WeatherState } from '../types';
import { fetchWeatherFailure, fetchWeatherRequest, fetchWeatherSuccess } from './weather.actions';

const initialState: WeatherState = {
  weatherData: null,
  fetchLoading: false,
  fetchError: null,
}

export const weatherReducer = createReducer(
  initialState,
  on(fetchWeatherRequest, state => ({...state, fetchLoading: true, fetchError: null})),
  on(fetchWeatherSuccess, (state, {weatherData}) => ({...state, fetchLoading: false, weatherData})),
  on(fetchWeatherFailure, (state, {error}) => ({...state, fetchLoading: true, fetchError: error})),
)
