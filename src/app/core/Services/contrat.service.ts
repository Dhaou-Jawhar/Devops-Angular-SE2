import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Contrat } from '../Models/Contrat';


@Injectable({
  providedIn: 'root'
})
export class ContratService {
  private baseURL = 'http://192.168.33.10/:8001/kaddem/contrat/'
  constructor(private httpClient: HttpClient) { }
  getContrat(): Observable<Contrat[]>{
    return this.httpClient.get<Contrat[]>(this.baseURL+"retrieve-all-contrats")
  }
  addContrat(contrat: Contrat): Observable<any>{
    const url = `${this.baseURL}add-contrat`;
    return this.httpClient.post(url, contrat);
  }



  deleteContrat(id: number):Observable<any>{
    return this.httpClient.delete(`${this.baseURL}remove-contrat/${id}`);
  }

}
