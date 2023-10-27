import { Component, OnInit } from '@angular/core';
import {Etudiant} from "../../core/Models/Etudiant";
import {EtudiantService} from "../../core/Services/etudiant.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {
  afficherFormulaire: boolean = false;

  etudiants!: any[];
  etudiantForm!: FormGroup;

  constructor(private etudiantService: EtudiantService, private fb: FormBuilder) {

    this.etudiantForm = this.fb.group({
      nomE: new FormControl('', Validators.required),
      prenomE: new FormControl('', Validators.required),
      contrats: new FormControl('', Validators.required),
      equipes: new FormControl('', Validators.required),
      op: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.etudiantService.getEtudiants().subscribe(res => {
      this.etudiants = res;
    });
  }

  showFormulaire() {
    this.afficherFormulaire = true;
  }

  // Méthode pour masquer le formulaire
  masquerFormulaire() {
    this.afficherFormulaire = false;
  }

  ajouterNouvelEtudiant() {
    console.log('Valeur de nom:', this.etudiantForm.value.nomE);
    console.log('Valeur de prénom:', this.etudiantForm.value.prenom);
    console.log('Valeur de contrat:', this.etudiantForm.value.contrat);
    console.log('Valeur de équipe:', this.etudiantForm.value.equipe);
    console.log('Valeur de option:', this.etudiantForm.value.option);
    const nomE = this.etudiantForm.value.nomE;
    const prenomE = this.etudiantForm.value.prenomE;
    const contrats = this.etudiantForm.value.contrats;
    const equipes = this.etudiantForm.value.equipes;
    const op = this.etudiantForm.value.op;

    const nouvelEtudiantData = {
      nomE,
      prenomE,
      contrats,
      equipes,
      op
    };

    this.etudiantService.addEtudiant(nouvelEtudiantData).subscribe(
      (response) => {
        this.etudiantService.getEtudiants().subscribe(res => {
          this.etudiants = res;
          Swal.fire('Succès!', 'Etudiant ajoté correctement');


         });
        this.afficherFormulaire = false;
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'étudiant : ', error);
        // Gérez les erreurs en conséquence
      }
    );
  }

  confirmationSuppressionEtudiant(etudiantId: number) {
    Swal.fire({
      title: 'Êtes-vous sûr de supprimer cet étudiant?',
      text: "Cette action est irréversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.supprimerEtudiant(etudiantId); // Appel de la fonction de suppression
      }
    });
  }
  supprimerEtudiant(etudiantId: number) {
    this.etudiantService.supprimerEtudiant(etudiantId).subscribe(
      () => {
        this.etudiantService.getEtudiants().subscribe(res => {
          this.etudiants = res;
          Swal.fire('Succès!', 'Etudiant supprimé correctement');

        });
        console.log('Étudiant supprimé avec succès');
        // Vous pouvez effectuer des actions supplémentaires ici après la suppression
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'étudiant : ', error);
        // Gérez les erreurs en conséquence
      }
    );

  }


}
