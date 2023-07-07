import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEscolasComponent } from './pages/lista-escolas/lista-escolas.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, ListaEscolasComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
