import { Component, OnInit } from '@angular/core';
import {Departement} from "../../core/Models/Departement";
import {DepartementService} from "../../core/Services/departement.service";

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss']
})
export class DepartementComponent implements OnInit {
  dep: Departement = new Departement();
  listdepartement: any;
  departements!: Departement[];

  constructor(private depservice: DepartementService) {
  }

  ngOnInit(): void {
    this.depservice.getAlldepartement().subscribe(res => {
      this.departements = res;
    });
  }

}

