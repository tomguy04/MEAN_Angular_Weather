import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weatherData:any[]=[];
 
  
  // weatherData:{};
  constructor(private _weatherService: WeatherService) { }
  //constructor() { }
 
  ngOnInit(){
    this._weatherService.retrieveWeather().subscribe(val=>this.weatherData = val);
  }
  
  // ngOnInit() {
  //   this._weatherService.weather$.subscribe(
  //     (val) => {this.weatherData = val;}
  //   )
  // }

  // ngOnInit() {
  //   this._weatherService.weatherArray$.subscribe(
  //     (val) => {this.weatherData = val}
  //   );


  // }

  // getWeather(){
  //   this._weatherService.retrieveWeather();
  // }


}
