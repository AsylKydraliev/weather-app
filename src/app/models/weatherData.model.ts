export interface WeatherDataModel {
  name: string,
  main: {
    feels_like: number,
    temp: number,
    temp_max: number,
    temp_min: number,
    humidity: number,
    pressure: number
  },
  wind: {
    speed: number,
    deg: number
  }
}

export class WeatherClassModel {
  constructor(
    public name: string,
    public main: {
      feels_like: number,
      temp: number,
      temp_max: number,
      temp_min: number,
      humidity: number,
      pressure: number
    },
    public wind: {
      speed: number,
      deg: number
    }
  ) {}
}
