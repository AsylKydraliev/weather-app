export interface WeatherDataModel {
  current: {
    condition: {
      text: string,
      icon: string
    },
    temp_c: number,
    temp_f: number,
    feelslike_c: number,
    feelslike_f: number,
    humidity: number,
    wind_kph: number,
    wind_dir: number,
    pressure_mb: number
  },
  location: {
    name: string,
    country: string
  }
}

export class WeatherClassModel {
  constructor(
    public current: {
      condition: {
        text: string,
        icon: string
      },
      temp_c: number,
      temp_f: number,
      feelslike_c: number,
      feelslike_f: number,
      humidity: number,
      wind_kph: number,
      wind_dir: number,
      pressure_mb: number
    },
    public location: {
      name: string,
      country: string
    }
  ) {}
}
