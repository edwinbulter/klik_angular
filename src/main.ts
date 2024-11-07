import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      //  Amazon Cognito User Pool ID
      userPoolId: 'xxxxxxxxxxx',
      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolClientId: 'xxxxxxxxxxx',
      // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
      identityPoolId: 'xxxxxxxxxxx',
      // OPTIONAL - Set to true to use your identity pool's unauthenticated role when user is not logged in
      allowGuestAccess: true,
      // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
      // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
      signUpVerificationMethod: 'code', // 'code' | 'link'
      loginWith: {
        // OPTIONAL - Hosted UI configuration
      }
    }
  }
});

// You can get the current config object
//const currentConfig = Amplify.getConfig();

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
