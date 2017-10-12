import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {TweetsComponent} from '../tweets/tweets.component';

import {AuthGuardGuard} from '../auth-guard.guard';



const appRoutes: Routes = [
  { path: 'login',
   component: LoginComponent },
  { path: 'tweets',component: TweetsComponent,canActivate:[AuthGuardGuard] },
  { path: '',   redirectTo: '/tweets', pathMatch: 'full' },
  { path: '**', component: TweetsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}