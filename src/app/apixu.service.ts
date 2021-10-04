import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location){
      return this.http.get(
          'http://api.weatherstack.com/current?access_key=529d1873f7d8fbed38fdeb98e8a3d561&query='+location
      );
  }
}
