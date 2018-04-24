import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap} from 'rxjs/operators';

@Injectable()
export class WeatherService {
  private base = `http://api.openweathermap.org/data/2.5/weather?q=`
  //weather$=new BehaviorSubject([]);
  // weather:{'hello'};
  temperature:number;
  temperature$ = new BehaviorSubject (0);
  weatherArray$ = new BehaviorSubject([]);
  // weather$=new BehaviorSubject({});

  weather$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  
  constructor(private _http: HttpClient) { }

  retrieveWeather():Observable <any>{
    //console.log('WEATHER SERVICE');
    return this._http.get(this.base+'seattle'+'&units=imperial&&appid=6dcd95f30b489dd2c037cfddd37c3853')
    .pipe(
      tap(val => {
        console.log(`humidity ${val.main.humidity}`)
        console.log(`Temp avg ${(val.main.temp_max-val.main.temp_min)/2}`)
        console.log(`Temp high ${val.main.temp_max}`)
        console.log(`Temp low ${val.main.temp_min}`)
        console.log(`status ${val.weather[0].main}`)

      }));
    // .subscribe(
      
    //   // (weatherArray:any[])=> {this.weatherArray$.next(weatherArray);}
  }
 }

