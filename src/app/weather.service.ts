import { Injectable } from '@angular/core';
import { BehaviorSubject, range } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map} from 'rxjs/operators';
import { Weather } from './weather';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';

@Injectable()
export class WeatherService {
  private base = `http://api.openweathermap.org/data/2.5/forecast?q=`

  fiveDay=[];
  
  constructor(private _http: HttpClient) { }
  retrieveWeather(city:string):Observable <Weather[]>{
    var highTemp;
    var tempReading;
    console.log('WEATHER SERVICE');
    console.log(city);
    return this._http.get<Weather>(`${this.base}+${city}&appid=6dcd95f30b489dd2c037cfddd37c3853&units=imperial`)
    .pipe(
      map((val:any ) => {
        console.log(val.list)
        console.log(val.list.length)

        let index = 0;
        for (let i = 0; i<val.list.length; i = i+8){
          let desc = val.list[i].weather[0].description.replace(/"/g,"");
          console.log(`desc is ${desc}`);
          const foreCast = new Weather(val.list[i].dt_txt, Math.round(val.list[i].main.humidity), Math.round(val.list[i].main.temp_max), Math.round(val.list[i].main.temp_min), desc)
          console.log(`foreCast is ${foreCast.description}`);
          this.fiveDay[index] = foreCast
          console.log(`${i} ${this.fiveDay[index].description}`);
          index+=1;
        }
        console.log(this.fiveDay);
        return (this.fiveDay);
      }));
  }
 }

