import { Component, OnInit } from '@angular/core';
import { Contrat } from 'src/app/core/Models/Contrat';
import { ContratService } from 'src/app/core/Services/contrat.service';
import { Router } from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent implements OnInit {

  public contratlist! : Contrat[];

  constructor(private contratservice : ContratService,
     private router: Router) { }

  ngOnInit(): void {
    this.contratservice.getContrat().pipe().subscribe((response:Contrat[])=>{
      this.contratlist=response;
      console.log(this.contratlist);},
    ()=>{
      console.log("error");
    });
  }

  async deleteContrat(id: number): Promise<void> {
    Swal.fire({
      title: 'Are you sure you want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        // User confirmed deletion
        this.contratservice.deleteContrat(id).subscribe(
          res => {
            console.log(res);
            let index = this.contratlist.findIndex(c => c.idContrat);
            window.location.reload();
          },
          err => {
            console.log(err);
          }, () => {
            console.log("delete Universite completed!");
          }
        );

        Swal.fire(
          'Deleted!',
          'Your universite has been deleted.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // User canceled deletion
        Swal.fire(
          'Cancelled',
          'Your universite file is safe :)',
          'error'
        );
      }
    });
  }

}
