import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipe } from '../Models/Equipe';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private API_URL ="http://192.168.33.10:8089/kaddem/equipe/"

  constructor(private http:HttpClient) { }

  addEquipe(equipe: Equipe): Observable<any> {
    const url = `${this.API_URL}add-equipe`;
    return this.http.post(url, equipe);
  }

  getEquipes() {
    const url = `${this.API_URL}retrieve-all-equipes`;

    return this.http.get<any[]>(url);
  }
}
