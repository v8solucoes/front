# Firebase FrontEnd

`npm install firebase @angular/fire`

Add your firebase configuration in enviorment.ts files.

```json
export const environment = {
  production: false,
  firebase: {
    apiKey: "xxxxxxxx-xxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxxxxxxx",
    databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxx",
    storageBucket: "xxxxxxxx",
    messagingSenderId: "xxxxxx",
    appId: "xxxxx",
    measurementId: "xxxxxxxxxxxxxxxx"
  }
}
```

## Import and register firebase modules in app.module.ts

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ]
})

## Firebase Emulador - Angular

module.ts
import { USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/compat/auth';
providers: [ { provide: USE_AUTH_EMULATOR, useValue: environment.emulador ? ['http://localhost:9099'] : undefined }],

## Create Auth Service

Exemple Imports
import { FirebaseApp } from '@angular/fire/compat';
import { connectAuthEmulator, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

IMPORTANT: INSTANCY CREDENCIALS
 constructor(
    public firebaseApp: FirebaseApp,
  ) { }
