import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { PaginaExtratoComponent } from './PaginaExtrato/PaginaExtrato.component';
import { PaginaHomeComponent } from './PaginaHome/PaginaHome.component';
import { PaginaLoginComponent } from './PaginaLogin/PaginaLogin.component';
import { PaginaTransferenciaComponent } from './PaginaTransferencia/PaginaTransferencia.component';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
