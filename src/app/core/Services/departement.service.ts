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
getDepartement(id:number){
  return this.http.get<Departement>(`${this.API_URL}/retrieve-departement/${id}`);
}
deletedep(id:number){
  return this.http.delete(this.API_URL+"/remove-departement/"+id);
}
  adddep(departement: any) {
    return this.http.post<any>(`${this.API_URL}/add-departement`, departement);
  }
}
