import { Component, OnInit } from '@angular/core';
import {Universite} from "../../../core/Models/universite";
import {UniversiteService} from "../../../core/Services/universite.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-univ-detail',
  templateUrl: './univ-detail.component.html',
  styleUrls: ['./univ-detail.component.scss']
})
export class UnivDetailComponent implements OnInit {
  universite:Universite = new Universite();
  id!:number;
  constructor(private univService:UniversiteService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params)=>{
        this.id=params['id'];
        if(this.id!=null){
          this.univService.getUnivid(this.id).subscribe(res=>{
              this.universite=res;
            },
            ()=>{console.log('error')},
            ()=>{}
          )
        }
      },
      ()=>{console.log('error')},
      ()=>{
        // Refresh the page here once data is loaded
        window.location.reload();
      }
    )
  }

}
