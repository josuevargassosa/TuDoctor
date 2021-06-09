import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { LoginComponent } from './login/login.component';
import { AngularMaterialModule } from '../angular-material.module';
import { PagesRoutingModule } from '../pages.routing';



@NgModule({
  declarations: [CambiarClaveComponent, LoginComponent],
  imports: [
    CommonModule, AngularMaterialModule, PagesRoutingModule
  ],
  exports: [
    CambiarClaveComponent, LoginComponent
  ]
})
export class AuthModule { }
