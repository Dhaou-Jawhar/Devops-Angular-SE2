import {Etudiant} from "./Etudiant";
import {Specialite} from "./enum Specialite";

export class Contrat{
  idContrat!:number;
  dateDebutContrat!:string;
  dateFinContrat!:string;
  montantContrat!:number;
  archive!:boolean;

  specialite!:Specialite;
  etudiant!:Etudiant;


}
