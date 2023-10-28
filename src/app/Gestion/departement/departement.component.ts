import { Component, OnInit } from '@angular/core';
import {Departement} from "../../core/Models/Departement";
import {DepartementService} from "../../core/Services/departement.service";
import Swal from "sweetalert2";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss']
})
export class DepartementComponent implements OnInit {
  dep: Departement = new Departement();
  public listdepartement!: Departement[];
  departements!: Departement[];
  departementForm!: FormGroup; // Formulaire pour ajouter un département
  showAddForm: boolean = false;

  constructor(private depservice: DepartementService, private formBuilder: FormBuilder) {
    this.departementForm = this.formBuilder.group({
      nomDepart: ['', Validators.required],
      imageSrc: ['']
    });
  }

  ngOnInit(): void {
    this.depservice.getAlldepartement().subscribe(res => {
      this.departements = res;
    });
  }
  async deletedep(depId: number): Promise<void> {
    try {
      const response = await this.depservice.deletedep(depId).toPromise();
      console.log(response);
      this.departements = this.departements.filter(dep => dep.idDepart !== depId);
      console.log("delete department completed!");
    } catch (err) {
      console.log(err);
    }
  }


  deleteDepartement(depId: number):void {
    Swal.fire({title: 'vous êtes sûr?',
      text: "voulez-vous supprimer cette Activity!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Deleted !'
    }).then(async (result)=>{
      if(result.value){
        await this.deletedep(depId);
        Swal.fire(
          'Deleted!',
          'Your department has been deleted.',
          'success'
        )
      }else if (result.dismiss === Swal.DismissReason.cancel){
        Swal.fire(
          'Cancelled',
          'Your department is safe :)',
          'error'
        );
      }
    });
  }
  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  ajouteDepartement() {
    if (this.departementForm.valid) {
      const newDepartement: Departement = this.departementForm.value;
      this.depservice.adddep(newDepartement).subscribe(response => {
        this.departements.push(newDepartement);
        this.departementForm.reset();
        this.showAddForm = false; // Cacher le formulaire après l'ajout
      });
    }
  }
}

