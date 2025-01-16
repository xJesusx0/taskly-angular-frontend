import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../env/enviorment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  get(endpoint:string): Observable<any>{
    return this.http.get(endpoint);
  }

  post(endpoint:string, data:any): Observable<any>{
    return this.http.post(apiUrl + endpoint, data);
  }

}
