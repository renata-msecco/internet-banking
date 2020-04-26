import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'internet-banking-avanade';

  constructor(public dialog: MatDialog) {
  }
  openDialog() {
    const dialogRef = this.dialog.open(AppComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    // Se CPF e Senha existe no banco de dados mude a rota para HOME e pegue as informações do cliente
    // Estudar promisses
    // Se não CPF ou Senha estiver errado Enviei mensagem de erro
  }
  }

