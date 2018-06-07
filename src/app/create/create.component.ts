import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { City } from '../city';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  city=new City();
  weatherData:Weather[]=[];
  currentWeather:Weather[]=[];

  constructor(private _weatherService: WeatherService,) { }

  onSubmit(formData:NgForm){
    event.preventDefault();
    const {value, valid} = formData;
    console.log(this.city);
    this._weatherService.retrieveWeather(this.city.name).subscribe(val=>
      {
        console.log(`val back ${val}`),
        this.weatherData =val,
        console.log(this.weatherData);
      });
  
    console.log(this.weatherData);
    for (let i in this.weatherData){
      console.log(`at the create ready to display ${i}`)
    }
    this.currentWeather=this.weatherData.slice(0,1);
    console.log(this.currentWeather);
  }

  ngOnInit() {
  }

}
