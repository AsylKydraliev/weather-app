import { Component, OnInit, ViewChild } from '@angular/core';
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
export class SearchComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  weatherError: Observable<null | string>;

  constructor(private store: Store<AppState>) {
    this.weatherError = store.select(state => state.weatherData?.fetchError);
  }

  ngOnInit(): void {}

  getWeatherInfo() {
    const city = this.form.value;
    this.store.dispatch(fetchWeatherRequest(city));
  }
}
