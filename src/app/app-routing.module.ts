import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaExtratoComponent } from './PaginaExtrato/PaginaExtrato.component';
import { PaginaHomeComponent } from './PaginaHome/PaginaHome.component';
import { PaginaLoginComponent } from './PaginaLogin/PaginaLogin.component';
import { PaginaTransferenciaComponent } from './PaginaTransferencia/PaginaTransferencia.component';

const routes: Routes = [
    { path: '', component: PaginaLoginComponent},
    { path: 'login', component: PaginaLoginComponent },
    { path: 'home', component:  PaginaHomeComponent },
    { path: 'transferencia', component: PaginaTransferenciaComponent },
    { path: 'extrato', component: PaginaExtratoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
