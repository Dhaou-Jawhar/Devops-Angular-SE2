import {Etudiant} from "./Etudiant";
import {Niveau} from "./enum Niveau";
import {DetailEquipe} from "./DetailEquipe";

export class Equipe{
  idEquipe!:number;
  nomEquipe!:string;
  niveau!:Niveau;
  etudiants!:Etudiant;
  detailEquipe!:DetailEquipe;

}
