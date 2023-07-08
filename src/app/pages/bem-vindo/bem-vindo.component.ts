import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.scss'],
})
export class BemVindoComponent {
  constructor(private router: Router) {}
  acessarDash() {
    this.router.navigate(['/lista-escolas']);
  }
}
