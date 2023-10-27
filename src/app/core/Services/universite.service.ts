import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Universite} from "../Models/universite";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  private API_URL ="http://localhost:8089/kaddem/universite/";
  constructor(private http:HttpClient) { }

  getUniversite(){
    return this.http.get<Universite[]>(this.API_URL+"retrieve-all-universites")
  }

  deleteUniversite(id:number){
    return this.http.delete(`${this.API_URL}remove-universite/${id}`);
  }

  getUnivid(id:number){
    return this.http.get<Universite>(`${this.API_URL}retrieve-universite/${id}`);
  }

  addUniversite(universite: Universite): Observable<any> {
    const url = `${this.API_URL}add-universite`;
    return this.http.post(url, universite);
  }

}
