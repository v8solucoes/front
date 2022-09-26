import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseApp } from '@angular/fire/compat';
import { connectAuthEmulator, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { environment } from 'src/environments/environment';
import { Ilanguage, Irequest } from '@domain/interface';
import { DataService } from '@repository/data.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(
    public firebaseApp: FirebaseApp,
    private data: DataService,
    public router: Router
  ) {

  }

  async loginIn(email: string, password: string, language: Ilanguage) {

    const auth = getAuth();
    environment.test ? connectAuthEmulator(auth, "http://localhost:9099") : ''

    return signInWithEmailAndPassword(auth, email, password).then(o => {
      console.log('Login Sucess')
      this.router.navigate([`${language}/app`])
    }).catch(o => {
      console.log('Login Error')
      this.router.navigate([`${language}/login/sign-in`])
      console.log(o)
    })

  }
  async loginOut() {

    const auth = getAuth();
    /*     environment.test ? connectAuthEmulator(auth, "http://localhost:9099") : ''; */

    return signOut(auth).then(() => {
      console.log('signOut Sucess')
      this.router.navigate([`en/login/sign-in`])
    }).catch((error) => {
      // An error happened.
      console.log('signOut Error')
    });

  }
  async loginGuard() {

    try {

      const user = getAuth().currentUser;

      if (user) {
        const credential = user as any
        this.data.acessToken = credential['accessToken']
        return true
      } else {

       /*  this.router.navigate([`en/login/sign-in`]) */
        return false

      }
    } catch (error) {
      return false
    }


  }
  
  async googleAuth() {

    const auth = getAuth();
    environment.test ? connectAuthEmulator(auth, "http://localhost:9099") : '';

    const testUser = GoogleAuthProvider.credential(`
    {"sub": "abc123",
    "email": "foo@example.com",
    "email_verified": true}`)

    await signInWithCredential(auth, testUser)

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
