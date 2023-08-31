import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'waiting-page-login',
    loadChildren: () => import('./waiting-page-login/waiting-page-login.module').then( m => m.WaitingPageLoginPageModule)
  },
  {
    path: '',
    redirectTo: 'waiting-page-login',
    pathMatch: 'full'
  },
  {
    path: 'waiting-page-welcome-user',
    loadChildren: () => import('./waiting-page-welcome-user/waiting-page-welcome-user.module').then( m => m.WaitingPageWelcomeUserPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
