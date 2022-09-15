import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseApp } from '@angular/fire/compat';
import { connectAuthEmulator, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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
  
  }

  async loginIn(email: string, password: string, language: Ilanguage) {

    const auth = getAuth();
    environment.test ? connectAuthEmulator(auth, "http://localhost:9099") : ''

    return signInWithEmailAndPassword(auth, email, password).then(o => {
      console.log('Login Sucess')
      console.log(o)
      this.router.navigate([`${language}/app/interface`])
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
  onAuthState() {
    const auth = getAuth();
  /*   environment.test ? connectAuthEmulator(auth, "http://localhost:9099",) : ''; */
    const user = auth.currentUser;
   /*  console.log('onStates')
    console.log(user) */

    if (user) {

    /*   console.log(user) */
      return true
    } else {

    /*   console.log(user) */
      this.router.navigate([`en/login/sign-in`])
      return false

    }
  }
  autenticado() {
    return new Promise((resolve, reject) => {
      getAuth().onAuthStateChanged(conectado => {
        if (conectado) {
          console.log('Autenticado', conectado.uid);
          resolve(conectado.uid);
        } else {
          alert('Desconectado');
          this.router.navigate([``]);
          reject(conectado);
        }
      });
    });
  }
  authChangeStatus() {
    const auth = getAuth();
    environment.test ? connectAuthEmulator(auth, "http://localhost:9099") : '';
  return  onAuthStateChanged(auth, (user) => {
    if (user) {
        
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      
        // ...
      } else {
        // User is signed out
        // ...
      }
    });

  }
  
}
