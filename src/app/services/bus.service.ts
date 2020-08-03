import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bus } from '../model/bus.model';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http: HttpClient) {}

  public findBus(): Observable<Bus[]>{
    return this.http.get<Bus[]>("http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=o");
  }
}
