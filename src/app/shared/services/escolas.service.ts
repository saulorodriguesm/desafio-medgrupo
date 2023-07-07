import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { Escolas } from '../models/Escolas';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EscolasService {
  constructor(private _httpClient: HttpClient) {}

  consultarEscolas(): Observable<Escolas[]> {
    return this._httpClient.get<Escolas[]>(API_PATH, {});
  }
  atualizarEscola(escola: Escolas): Observable<Escolas> {
    return this._httpClient.put<Escolas>(API_PATH, escola);
  }
  adicionarEscola(escola: Escolas): Observable<Escolas> {
    return this._httpClient.post<Escolas>(API_PATH, escola);
  }
}
