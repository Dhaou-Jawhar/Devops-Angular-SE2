import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllTemplateUserComponent} from "./frontOffice/all-template-user/all-template-user.component";
import {LandingPageComponent} from "./frontOffice/landing-page/landing-page.component";
import {EtudiantComponent} from "./Gestion/etudiant/etudiant.component";
import {UnivListComponent} from "./Gestion/universite/univ-list/univ-list.component";
import {UnivDetailComponent} from "./Gestion/universite/univ-detail/univ-detail.component";
import {UnivFormComponent} from "./Gestion/universite/univ-form/univ-form.component";
import {DepartementComponent} from "./Gestion/departement/departement.component";
import {FormEquipeComponent} from "./Gestion/equipe/form-equipe/form-equipe.component";
import { DetailEquipeComponent } from './Gestion/equipe/detail-equipe/detail-equipe.component';


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
      },
      {
        path:'universiteDetail/:id',component:UnivDetailComponent
      },
      {
        path:'adduniv',component:UnivFormComponent
      },
      {
        path:'departement',component:DepartementComponent
      },
      {
        path:'equipe',component:FormEquipeComponent
      },
      {
        path:'Allequipe',component:DetailEquipeComponent
      },
      ]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
