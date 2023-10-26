import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Departement} from "../Models/Departement";

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
private  API_URL="http://localhost:8089/kaddem/departement"

  constructor(private  http:HttpClient) {}
  getAlldepartement(){
    const url = `${this.API_URL}/retrieve-all-departements`;
    return this.http.get<any>(url);
  }
}
