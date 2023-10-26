import { Component, OnInit } from '@angular/core';
import {Universite} from "../../../core/Models/universite";
import {UniversiteService} from "../../../core/Services/universite.service";

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

  async deleteUniversite(id:number):Promise<void> {
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
  }

}
