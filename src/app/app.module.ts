import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './ui/toolbar/toolbar.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherMainComponent } from './components/weather-main/weather-main.component';
import { FormsModule } from '@angular/forms';
import { weatherReducer } from './store/weatherStore/weather.reducer';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './store/weatherStore/weather.effects';
import { InfoBlockComponent } from './components/weather-main/info-block/info-block.component';
import { SlideToggleComponent } from './ui/slide-toggle/slide-toggle.component';
import { FooterComponent } from './ui/footer/footer.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchComponent,
    WeatherMainComponent,
    InfoBlockComponent,
    SlideToggleComponent,
    FooterComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        StoreModule.forRoot({
          weatherData: weatherReducer
        }, {}),
        EffectsModule.forRoot([
          WeatherEffects,
        ]),
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          },
          defaultLanguage: 'en'
        })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
