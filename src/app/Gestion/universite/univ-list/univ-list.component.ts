import { Component, OnInit } from '@angular/core';
import {Universite} from "../../../core/Models/universite";
import {UniversiteService} from "../../../core/Services/universite.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-univ-list',
  templateUrl: './univ-list.component.html',
  styleUrls: ['./univ-list.component.scss']
})
export class UnivListComponent implements OnInit {

  public list!: Universite[];
  constructor(private univService:UniversiteService) { }

  ngOnInit(): void {
    this.univService.getUniversite().pipe().subscribe((response:Universite[])=>{
        this.list=response;
        console.log(this.list);},
      ()=>{
        console.log("error");
      });
  }

  /*async deleteUniversite(id:number):Promise<void> {
    const response = await this.univService.deleteUniversite(id).subscribe(
      res=>{
        console.log(res);
        let index = this.list.findIndex(c=>c.idUniv);
        this.list.splice(index,1);
      },
      err=>{
        console.log(err);
      },()=>{
        console.log("delete Universite completed!")
      }
    )
  }*/

  //SWAL : https://www.tutsmake.com/angular-14-sweetalert2-example/

  async deleteUniversiteWithConfirmation(id: number): Promise<void> {
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
        this.univService.deleteUniversite(id).subscribe(
          res => {
            console.log(res);
            let index = this.list.findIndex(c => c.idUniv);
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
