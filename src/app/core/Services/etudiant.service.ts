import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private apiUrl = 'http://192.168.33.10:8066/kaddem/etudiant';

  constructor(private http: HttpClient) { }

  getEtudiants() {
    const url = `${this.apiUrl}/retrieve-all-etudiants`;

    return this.http.get<any[]>(url);
  }
  addEtudiant(etudiant: any) {
    return this.http.post<any>(`${this.apiUrl}/add-etudiant`, etudiant);
  }
  supprimerEtudiant(etudiantId: number): Observable<any> {
    const url = `${this.apiUrl}/remove-etudiant/${etudiantId}`;
    return this.http.delete(url);
  }
}
