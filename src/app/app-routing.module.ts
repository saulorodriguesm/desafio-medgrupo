import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEscolasComponent } from './pages/lista-escolas/lista-escolas.component';

const routes: Routes = [
  {
    path: 'lista-escolas',
    component: ListaEscolasComponent,
  },
  {
    path: '**',
    redirectTo: 'lista-escolas',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
