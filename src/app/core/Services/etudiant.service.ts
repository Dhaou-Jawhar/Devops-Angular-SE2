import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private apiUrl = 'http://localhost:8089/kaddem/etudiant';

  constructor(private http: HttpClient) { }

  getEtudiants() {
    const url = `${this.apiUrl}/retrieve-all-etudiants`;

    return this.http.get<any[]>(url); 
  }
  addEtudiant(etudiant: any) {
    return this.http.post<any>(`${this.apiUrl}/add-etudiant`, etudiant);
  }
}
