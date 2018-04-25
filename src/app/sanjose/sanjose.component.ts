import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service'; //we need the weather service to call the api for us
import { Weather } from '../weather'; //we need the weather class so we can make a weather object to pass to our view.

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weatherData:Weather; //we need our weather object to store the weather data returned by the service/api

  //bring in the weather service so we may access its method(s)
  constructor(private _weatherService: WeatherService) { }

  //when this component loads, make a call to the service method we need and send our current city, San Jose.
  ngOnInit() {
    this._weatherService.retrieveWeather('san jose').subscribe(val=>this.weatherData =val);
  }

}
