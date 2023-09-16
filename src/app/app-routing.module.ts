import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'waiting-page-login',
    pathMatch: 'full'
  },
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
    path: 'waiting-page-welcome-user',
    loadChildren: () => import('./waiting-page-welcome-user/waiting-page-welcome-user.module').then( m => m.WaitingPageWelcomeUserPageModule)
  },
  {
    path: 'main-page',
    loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPagePageModule)
  },
  {
    path: 'subjects',
    loadChildren: () => import('./subjects/subjects.module').then(m => m.SubjectsPageModule)
  },
  {
    path: 'register-attendance',
    loadChildren: () => import('./register-attendance/register-attendance.module').then(m => m.RegisterAttendancePageModule)
  },
  {
    path: 'assistance',
    loadChildren: () => import('./assistance/assistance.module').then(m => m.AssistancePageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then(m => m.NotesPageModule)
  },
  {
    path: 'virtual-credential',
    loadChildren: () => import('./virtual-credential/virtual-credential.module').then(m => m.VirtualCredentialPageModule)
  },
  {
    path: 'options',
    loadChildren: () => import('./options/options.module').then(m => m.OptionsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
