import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEscolasComponent } from './pages/lista-escolas/lista-escolas.component';
import { BemVindoComponent } from './pages/bem-vindo/bem-vindo.component';

const routes: Routes = [
  {
    path: 'lista-escolas',
    component: ListaEscolasComponent,
  },
  {
    path: 'bem-vindo',
    component: BemVindoComponent,
  },
  {
    path: '**',
    redirectTo: 'bem-vindo',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
