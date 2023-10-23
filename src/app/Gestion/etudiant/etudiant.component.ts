import { Component, OnInit } from '@angular/core';
import {Etudiant} from "../../core/Models/Etudiant";
import {EtudiantService} from "../../core/Services/etudiant.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {

  etudiants!: any[];
  etudiantForm!: FormGroup;

  constructor(private etudiantService: EtudiantService,/*private modalService: NgbModal*/ private fb: FormBuilder) {
    this.etudiantForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      option: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.etudiantService.getEtudiants().subscribe(res => {
      this.etudiants = res;
    });
  }

  /*ajouterEtudiant(content:any) {
    this.modalService.open(content, { centered: true });
  }*/

}
