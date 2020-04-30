import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { PaginaExtratoComponent } from './PaginaExtrato/PaginaExtrato.component';
import { PaginaHomeComponent } from './PaginaHome/PaginaHome.component';
import { PaginaLoginComponent } from './PaginaLogin/PaginaLogin.component';
import { PaginaTransferenciaComponent } from './PaginaTransferencia/PaginaTransferencia.component';
import { TextComponent } from './text/text.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { ConfirmaTransfComponent } from './confirma-transf/confirma-transf.component';
import { TransferenciaValorComponent } from './transferencia-valor/transferencia-valor.component';
import { TransferindoComponent } from './transferindo/transferindo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginaLoginComponent,
    FooterComponent,
    InputComponent,
    PaginaHomeComponent,
    ButtonComponent,
    PaginaExtratoComponent,
    PaginaTransferenciaComponent,
    TextComponent,
    NaoEncontradoComponent,
    ConfirmaTransfComponent,
    TransferenciaValorComponent,
    TransferindoComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
