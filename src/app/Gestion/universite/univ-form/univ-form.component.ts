import { Component, OnInit } from '@angular/core';
import {Universite} from "../../../core/Models/universite";
import {UniversiteService} from "../../../core/Services/universite.service";
import {ActivatedRoute} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-univ-form',
  templateUrl: './univ-form.component.html',
  styleUrls: ['./univ-form.component.scss']
})
export class UnivFormComponent implements OnInit {

  universite: Universite = new Universite();

  constructor(
    private universiteService : UniversiteService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {}

  addUniversite(){
    this.universiteService.addUniversite(this.universite).subscribe(res=>{
      console.log(res)
      Swal.fire('Succès!', 'Universite ajouté correctement');
      setTimeout(() => {
        window.location.reload();
      });
      this.universite = new Universite()
    },err=>{
      console.log(err)
      alert('erron server')
    })
  }

}
