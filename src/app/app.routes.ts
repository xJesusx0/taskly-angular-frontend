import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { authGuard, loginGuard } from './guards/AuthGuard';

export const routes: Routes = [
    {path: '' , component: LoginPageComponent},
    {path: 'home' , component: HomePageComponent}
];
