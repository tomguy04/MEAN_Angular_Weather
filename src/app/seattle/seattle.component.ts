import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather'


@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weatherData:Weather;

  constructor(private _weatherService: WeatherService) { }
 
  ngOnInit(){
    this._weatherService.retrieveWeather('seattle').subscribe(val=>this.weatherData = val);
  }

}
