import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseApp } from '@angular/fire/compat';
import { connectAuthEmulator, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { environment } from 'src/environments/environment';
import { Ilanguage } from '@domain/interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(
    public firebaseApp: FirebaseApp,
    private router: Router
  ) {
    console.log('Firebase Auth')
  }

  async login(email: string, password: string, language: Ilanguage) {

    const auth = getAuth();
    environment.test ? connectAuthEmulator(auth, "http://localhost:9099") : '';

    return signInWithEmailAndPassword(auth, email, password).then(o => {
      console.log('Login Sucess')
      console.log(o)
      this.router.navigate([`${language}/login/login/create/x`])
    }).catch(o => {
      console.log('Login Error')
      console.log(o)
    })

  }

  async googleAuth() {

    const auth = getAuth();
    environment.test ? connectAuthEmulator(auth, "http://localhost:9099") : '';

    return signInWithPopup(auth, new GoogleAuthProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.providerId
    
        // The signed-in user info.
        const user = result.user;
        console.log('GoogleAuth Sucess')
        console.log(user)
        // ...
      }).catch((error) => {
        console.log('GoogleAuth Error')
        console.log(error)
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(credential)
      });
  }
}
