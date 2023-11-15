import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/core/Models/Equipe';
import { EquipeService } from 'src/app/core/Services/equipe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-equipe',
  templateUrl: './detail-equipe.component.html',
  styleUrls: ['./detail-equipe.component.scss']
})
export class DetailEquipeComponent implements OnInit {
  public list!: Equipe[];

  constructor(private equipeService:EquipeService ) { }

  ngOnInit(): void {
    this.equipeService.getEquipes().pipe().subscribe((response:Equipe[])=>{
      this.list=response;
      console.log(this.list);},
    ()=>{
      console.log("error");
    });
  }

  //Supprimer Equipe
  async deleteEquipeWithConfirmation(id: number): Promise<void> {
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
        this.equipeService.deleteEquipe(id).subscribe(
          res => {
            console.log(res);
            let index = this.list.findIndex(c => c.idEquipe);
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
