import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginModel } from '../../models/auth/login.model';
import { ApiService } from '../../requests/api.service';
import { AuthService } from '../../services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ){}
  
  loginName: string = '';
  password: string = '';

  login() {
    const loginModel: LoginModel = {
      loginName: this.loginName,
      password: this.password
    };

    this.authService.login(loginModel).pipe(
      catchError(this.handleError)
    ).subscribe({
      next: (response) => {
        const data:any = response.data
        alert('Inicio de sesion exitoso')
        this.router.navigate(['home'])
        this.authService.setLoggedIn(true)
        localStorage.setItem('jwt', data.jwt)
        localStorage.setItem('data', JSON.stringify(data))
      }
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Ocurrió un error:', error.error);
      alert('Error de red: no se pudo conectar al servidor.');
    } else {

      console.error(
        `El servidor devolvió el código ${error.status}, ` +
        `cuerpo de respuesta: ${error.error}`);
      
      if (error.status === 401) {
        alert('Credenciales inválidas. Por favor, inténtelo de nuevo.');
      } else if (error.status === 500) {
        alert('Error interno del servidor. Intente más tarde.');
      } else {
        alert('Ocurrió un error inesperado. Intente más tarde.');
      }
    }

    return throwError(() => new Error('Algo salió mal. Por favor, intente más tarde.'));
  }
}
