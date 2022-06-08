import { WeatherClassModel } from '../models/weatherData.model';

export type WeatherState = {
  weatherData: null | WeatherClassModel,
  fetchLoading: boolean,
  fetchError: null | string,
};

export type AppState = {
  weatherData: WeatherState
};
