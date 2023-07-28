import { Injectable } from '@angular/core';
import { Automovil } from '../model/automovil';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://34.74.203.19:8080/automovil/all';

  Url1='http://34.74.203.19:8080/automovil/add';

  getAutomoviles(){
    return this.http.get<Automovil[]>(this.Url);
  }

  createAutomovil(automovil:any): Observable<any>{
    return this.http.post<any>(`${this.Url1}`, automovil);
  }
}
