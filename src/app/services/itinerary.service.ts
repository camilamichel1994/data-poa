import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {

  constructor(private http: HttpClient) {}

  public findItinerary(busId: String): Observable<Object>{
    return this.http.get<Object>(`http://www.poatransporte.com.br/php/facades/process.php?a=il&p=${busId}`);
  }
}
