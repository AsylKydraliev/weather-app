import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/types';
import { fetchWeatherRequest } from '../../store/weatherStore/weather.actions';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
  @ViewChild('form') form!: NgForm;
  weatherError: Observable<null | string>;
  loading: Observable<null | boolean>;

  constructor(private store: Store<AppState>) {
    this.weatherError = store.select(state => state.weatherData?.fetchError);
    this.loading = store.select(state => state.weatherData?.fetchLoading);
  }

  getWeatherInfo() {
    this.store.dispatch(fetchWeatherRequest({city: this.form.value.city}));
  }
}
