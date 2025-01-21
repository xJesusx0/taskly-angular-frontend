import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    router.navigate(['']); // Redirigir al login si no está autenticado
    return false;
  }
  return true;
};


export const loginGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);
  
    
    if (authService.isLoggedIn()) {
        // Si ya está logueado, redirigir a la página principal (o a donde desees)
        router.navigate(['home']);
        return false;
      }
      return true;
}
  