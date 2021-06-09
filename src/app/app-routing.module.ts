import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  {
    path: '',
    component: CustomLayoutComponent,
    children: []
  },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login',
    // canActivate: [NoLoginGuard],
    component: LoginComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  }), PagesRoutingModule,],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
