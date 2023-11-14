import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/core/Models/Contrat';
import { ContratService } from 'src/app/core/Services/contrat.service';
import {ActivatedRoute} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contrat-form',
  templateUrl: './contrat-form.component.html',
  styleUrls: ['./contrat-form.component.scss']
})
export class ContratFormComponent implements OnInit {
  contrat: Contrat = new Contrat();
  
  constructor(private contratservice : ContratService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  addContrat(){
    this.contratservice.addContrat(this.contrat).subscribe(res=>{
      console.log(res)
      Swal.fire('Succès!', 'Contrat ajouté correctement');
      setTimeout(() => {
        window.location.reload();
      });
      this.contrat = new Contrat()
    },err=>{
      console.log(err)
      alert('erron server')
    })
  }

}
