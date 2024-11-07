import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import amplifyconfig from '../amplifyconfiguration.json';
import {Amplify} from 'aws-amplify';
import { AboutComponent } from './about/about.component';
import { DesignComponent } from './design/design.component';
import { KlikAppComponent } from './klik-app/klik-app.component';
import { UsageComponent } from './usage/usage.component';
import { KlikAppSignInComponent } from './klik-app-sign-in/klik-app-sign-in.component';

Amplify.configure(amplifyconfig);

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DesignComponent,
    KlikAppComponent,
    UsageComponent,
    KlikAppSignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
