import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {
  private base = `http://api.openweathermap.org/data/2.5/weather?q=`
  temperature:number;
  temperature$ = new BehaviorSubject (0);
  weatherArray$ = new BehaviorSubject([]);
  //weather$=new BehaviorSubject([]);
  weather$=new BehaviorSubject({});
  // weather:{'hello'};


  constructor(private _http: HttpClient) { }
  
  retrieveWeather(){
    //console.log('WEATHER SERVICE');
    this._http.get(this.base+'seattle'+'&units=imperial&&appid=6dcd95f30b489dd2c037cfddd37c3853')
    
    .subscribe(
      // (weatherArray:any[])=> {this.weatherArray$.next(weatherArray);}
      // (data:any[])=>{this.weather$.next(data);}  
      (data:{})=>{this.weather$.next(data);}  
    )
    console.log(this._http.get<any[]>(this.base+'seattle'+'&units=imperial&&appid=6dcd95f30b489dd2c037cfddd37c3853'));
    // console.log(this.weather);
  //  return this.weather;
  }
 }

//from javascript implementation
// $.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&&appid=6dcd95f30b489dd2c037cfddd37c3853',
// function(res){
//         //console.log(res);
        
//         var temp=res.main.temp;
//         $('#weatherresult').html(`<h1>${city}</h1><h3>Temperature: ${temp}</h3>`);
//         },'json'
//     );
//     return false;
