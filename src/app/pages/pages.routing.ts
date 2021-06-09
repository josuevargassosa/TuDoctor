import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {
        path: '',
        // component: CustomLayoutComponent, 
        // canActivate: [AuthGuard],
        children: [
          {
            path: 'cambiar-clave',
            // component: CambiarClaveComponent
          },
        ]
      }
];
 
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


