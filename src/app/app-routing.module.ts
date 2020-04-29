import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { PaginaExtratoComponent } from './PaginaExtrato/PaginaExtrato.component';
import { PaginaHomeComponent } from './PaginaHome/PaginaHome.component';
import { PaginaLoginComponent } from './PaginaLogin/PaginaLogin.component';
import { PaginaTransferenciaComponent } from './PaginaTransferencia/PaginaTransferencia.component';
import { EstaLogadoGuard } from './shared/guards/logado/esta-logado.guard';

const routes: Routes = [{
    path: 'login',
    component: PaginaLoginComponent,
    // canActivate: [NaoEstaLogadoGuard],
}, {
    path: 'home',
    component:  PaginaHomeComponent,
    canActivate: [EstaLogadoGuard],
}, {
    path: 'transferencia',
    component: PaginaTransferenciaComponent,
    canActivate: [EstaLogadoGuard],
}, {
    path: 'extrato',
    component: PaginaExtratoComponent,
    canActivate: [EstaLogadoGuard],
}, {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
}, {
    path: '**',
    component: NaoEncontradoComponent,
}];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
