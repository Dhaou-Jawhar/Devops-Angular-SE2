/*-------------------[Import Three Js]---------------------*/
import { NgtColorPipeModule, NgtCoreModule } from '@angular-three/core';
import { NgtAmbientLightModule, NgtPointLightModule } from '@angular-three/core/lights';
import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import { NgtSobaLoaderModule } from '@angular-three/soba/loaders';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';
/*---------------------------------------------------------*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LogoComponent } from './3D-Component/logo/logo.component';
import {AllTemplateUserComponent} from "./frontOffice/all-template-user/all-template-user.component";
import {BodyUserComponent} from "./frontOffice/body-user/body-user.component";
import {FooterUserComponent} from "./frontOffice/footer-user/footer-user.component";
import {LandingPageComponent} from "./frontOffice/landing-page/landing-page.component";
import {NavUserComponent} from "./frontOffice/nav-user/nav-user.component";
import { EtudiantComponent } from './Gestion/etudiant/etudiant.component';
import {HttpClientModule} from "@angular/common/http";
import { UnivListComponent } from './Gestion/universite/univ-list/univ-list.component';
import { UnivModelComponent } from './Gestion/universite/univ-model/univ-model.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    AllTemplateUserComponent,
    BodyUserComponent,
    FooterUserComponent,
    LandingPageComponent,
    NavUserComponent,
    EtudiantComponent,
    UnivListComponent,
    UnivModelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgtCoreModule,
    NgtSobaLoaderModule,
    NgtPrimitiveModule,
    NgtSobaOrbitControlsModule,
    NgtAmbientLightModule,
    NgtPointLightModule,
    NgtColorPipeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
