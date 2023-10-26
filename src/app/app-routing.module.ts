import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllTemplateUserComponent} from "./frontOffice/all-template-user/all-template-user.component";
import {LandingPageComponent} from "./frontOffice/landing-page/landing-page.component";
import {EtudiantComponent} from "./Gestion/etudiant/etudiant.component";
import {UnivListComponent} from "./Gestion/universite/univ-list/univ-list.component";
import {DepartementComponent} from "./Gestion/departement/departement.component";


const routes: Routes = [
  {
    path: '', component: AllTemplateUserComponent,
    children:[
      {
        path:'',component:LandingPageComponent
      },
      {
        path:'home',component:LandingPageComponent
      },
      {
        path:'etudiant',component:EtudiantComponent
      },
      {
        path:'universite',component:UnivListComponent
      }
      ,
      {
        path:'departement',component:DepartementComponent
      },
      ]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
