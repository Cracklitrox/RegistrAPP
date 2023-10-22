import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  url: string= "";

  constructor(private http:HttpClient) {
    this.url='http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/821?apikey=vl1J5Gfc3qGOrY1m8s7FmB1aWYmSBFyU&language=es&details=true&metric=true'

   }

   ObtenerClima():Observable<any>{
    return this.http.get(this.url).pipe(
      retry(3)
    );
  }
}
