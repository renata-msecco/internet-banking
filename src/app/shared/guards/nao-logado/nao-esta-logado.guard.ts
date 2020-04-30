import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NaoEstaLogadoGuard implements CanActivate {
  constructor(
    private router: Router,
  ){ }

  canActivate(): boolean{

    if (Number(!window.localStorage.getItem('cliente_id'))){
      return  true;
    }
    this.router.navigate(['home']);
    return false;
  }
}
