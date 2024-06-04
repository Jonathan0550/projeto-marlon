import { Component } from '@angular/core';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';

  cadastrar() {
    // Lógica para enviar os dados para o servidor ou realizar outras ações
    console.log('Dados enviados:', this.nome, this.email, this.senha);
  }
}
