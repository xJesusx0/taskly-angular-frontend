import { Injectable } from '@angular/core';
import { ApiService } from '../../requests/api.service';
import { LoginModel } from '../../models/auth/login.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: ApiService
  ) { }

  private isLoggedIn$ = new BehaviorSubject<boolean>(false);  // Asume que el usuario no está logueado al principio

  // Método para obtener el valor actual de isLoggedIn$
  isLoggedIn(): boolean {
    return this.isLoggedIn$.getValue();  // Obtener el valor actual
  }

  // Método para cambiar el estado de logueo
  setLoggedIn(value: boolean): void {
    this.isLoggedIn$.next(value);
  }

  login(loginBody: LoginModel): Observable<any>{
    return this.http.post('/auth/login', loginBody)
  }

  logout(): void {
    localStorage.removeItem('jwt');
    localStorage.removeItem('data');
    this.setLoggedIn(false); 
  }
}
