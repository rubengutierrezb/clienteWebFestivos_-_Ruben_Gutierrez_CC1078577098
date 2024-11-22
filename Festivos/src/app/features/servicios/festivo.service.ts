import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url=`${environment.urlBase}festivos/`;
  }

  verificar(fecha: string): Observable<string> {
    const url = `${this.url}verificar/${fecha}`;
    return this.httpClient.get(url, { responseType: 'text' });
  }

  obtener(year: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.url}obtener/${year}`);
  }
}
