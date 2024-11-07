import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {DesignComponent} from './design/design.component';
import {UsageComponent} from './usage/usage.component';
import {KlikAppSignInComponent} from './klik-app-sign-in/klik-app-sign-in.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'design', component: DesignComponent },
  { path: 'klik', component: KlikAppSignInComponent },
  { path: 'usage', component: UsageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
