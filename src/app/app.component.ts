import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from './pages/weather/services/weather.service';
import { WeatherData } from './shared/interfaces/weather.interface';
import { GeoLocationService } from './shared/services/geo-localation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

public weather$!: Observable<WeatherData>;

  constructor(private weatherSvc: WeatherService,
     private geoLocationSvc: GeoLocationService)
     {
      if(navigator.geolocation ){
       this.geoLocation();
      }
     }

  public onSearch(city: string): void {
    this.weather$ = this.weatherSvc.getWeatherByName(city);
  }

  
  private async geoLocation() {
    try {

      const { coords } = await this.geoLocationSvc.getPosition();

        this.weather$ = this.weatherSvc.getWeatherByCoords(coords);

    } catch (err) {
      console.log(err);
    }
  }
}