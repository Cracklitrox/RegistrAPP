import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthorizedStudentGuard } from './authorized-student.guard';
import { DisavowedStudentGuard } from './disavowed-student.guard';
import { NotFoundPage } from './not-found/not-found.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'waiting-page-login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [DisavowedStudentGuard]
  },
  { 
    path: 'password-reset',
    loadChildren: () => import('./password-reset/password-reset.module').then( m => m.PasswordResetPageModule),
    canActivate: [DisavowedStudentGuard]
  },
  {
    path: 'waiting-page-login',
    loadChildren: () => import('./waiting-page-login/waiting-page-login.module').then( m => m.WaitingPageLoginPageModule),
    canActivate: [DisavowedStudentGuard]
  },
  {
    path: 'waiting-page-welcome-user',
    loadChildren: () => import('./waiting-page-welcome-user/waiting-page-welcome-user.module').then( m => m.WaitingPageWelcomeUserPageModule),
    canActivate: [AuthorizedStudentGuard]
  },
  {
    path: 'main-page',
    loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPagePageModule),
    canActivate: [AuthorizedStudentGuard]
  },
  {
    path: 'subjects',
    loadChildren: () => import('./subjects/subjects.module').then(m => m.SubjectsPageModule),
    canActivate: [AuthorizedStudentGuard]
  },
  {
    path: 'register-attendance',
    loadChildren: () => import('./register-attendance/register-attendance.module').then(m => m.RegisterAttendancePageModule),
    canActivate: [AuthorizedStudentGuard]
  },
  {
    path: 'assistance',
    loadChildren: () => import('./assistance/assistance.module').then(m => m.AssistancePageModule),
    canActivate: [AuthorizedStudentGuard]
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then(m => m.NotesPageModule),
    canActivate: [AuthorizedStudentGuard]
  },
  {
    path: 'virtual-credential',
    loadChildren: () => import('./virtual-credential/virtual-credential.module').then(m => m.VirtualCredentialPageModule),
    canActivate: [AuthorizedStudentGuard]
  },
  {
    path: 'options',
    loadChildren: () => import('./options/options.module').then(m => m.OptionsPageModule),
    canActivate: [AuthorizedStudentGuard]
  },
  {
    path: 'waiting-page-logout',
    loadChildren: () => import('./waiting-page-logout/waiting-page-logout.module').then( m => m.WaitingPageLogoutPageModule),
    canActivate: [AuthorizedStudentGuard]
  },

  {
    path: '**',
    component: NotFoundPage,
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
