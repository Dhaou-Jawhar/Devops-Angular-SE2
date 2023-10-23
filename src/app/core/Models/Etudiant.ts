import {Option} from "./enum Option";
import {Contrat} from "./Contrat";
import {Departement} from "./Departement";
import {Equipe} from "./Equipe";

export class Etudiant{
  idEtudiant!:number;
  nomE!:string;
  prenomE!:string;
  op!:Option;
  contrats!:Contrat;
  departement!:Departement;
  equipes!:Equipe;

}
