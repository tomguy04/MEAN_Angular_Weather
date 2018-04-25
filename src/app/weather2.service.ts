import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap} from 'rxjs/operators';
import { Weather } from './weather';

@Injectable()
export class WeatherService {
  private base = `http://api.openweathermap.org/data/2.5/weather?q=`
  //weather$=new BehaviorSubject([]);
  // weather:{'hello'};
  temperature:number;
  temperature$ = new BehaviorSubject (0);
  weatherArray$ = new BehaviorSubject([]);
  // weather$=new BehaviorSubject({});
  myWeather$ : BehaviorSubject<Weather> = new BehaviorSubject(<Weather>);
  myWeather = new Weather();
  weather$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  
  constructor(private _http: HttpClient) { }

  // retrieveWeather():Observable <Weather>{
    
  //   //console.log('WEATHER SERVICE');
  //   this._http.get<Weather>(this.base+'seattle'+'&units=imperial&&appid=6dcd95f30b489dd2c037cfddd37c3853')
  //   .pipe(
  //     tap(val => {
  //       this.myWeather.humidity = val.main.humidity 

  //     }))
  //   return this.myWeather;
  //   // .subscribe(
      
    //   // (weatherArray:any[])=> {this.weatherArray$.next(weatherArray);}
//   }
//  }

