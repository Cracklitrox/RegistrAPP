import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPage } from './not-found.page';

const routes: Routes = [
  

 {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
  path: 'login',
  redirectTo: 'login',
  pathMatch: 'full'
},

{  path: '',
  redirectTo: 'waiting-page-login',
  pathMatch: 'full' 
},

{
  path: 'main-page',
  redirectTo: 'main-page',
  pathMatch: 'full'
},

{
  path: 'assistance',
  redirectTo: 'assistance',
  pathMatch: 'full'
},

{  
  path: 'password-reset',
  redirectTo: 'password-reset',
  pathMatch: 'full'
},

{  
  path: '**',
  redirectTo: 'not-found',
  pathMatch: 'full'
},
  
  {
    path: '',
    component: NotFoundPage
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotFoundPageRoutingModule {}
