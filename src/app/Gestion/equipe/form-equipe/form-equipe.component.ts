import { Component, OnInit } from '@angular/core';
import {Equipe} from "../../../core/Models/Equipe";
import { EquipeService } from 'src/app/core/Services/equipe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-equipe',
  templateUrl: './form-equipe.component.html',
  styleUrls: ['./form-equipe.component.scss']
})
export class FormEquipeComponent implements OnInit {

  Equipe = new Equipe();

  constructor( private equipeService:EquipeService) { }

  ngOnInit(): void {}

  addEquipe(){
    this.equipeService.addEquipe(this.Equipe).subscribe(res=>{
      console.log(res)
      Swal.fire({
        title: 'Succès!',
        text: 'Equipe ajoutée avec succès',
        timer: 10000, // Durée d'affichage en millisecondes (3 secondes)
        showConfirmButton: false // Pour empêcher l'utilisateur de fermer la fenêtre manuellement
      });
      setTimeout(() => {
        window.location.reload();
      });
      this.Equipe = new Equipe()
    },err=>{
      console.log(err)
      alert('erron server')
    })
  }

}
