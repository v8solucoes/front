import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '@repository/data.service';
import { FirebaseApp } from '@angular/fire/compat';
import { connectAuthEmulator, getAuth, GoogleAuthProvider, signInWithCredential, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { Irequest, Iuser } from '@domain/interface';
import { environment } from 'src/environments/environment';
import { _debug } from '../../../../domain/src/domain/repository/debug';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(
    private data: DataService,
    public firebaseApp: FirebaseApp,
    public router: Router
  ) {
/*     environment.test ? connectAuthEmulator(getAuth(), "http://127.0.0.1:9099", { disableWarnings: true }) : ''
 */  }

 saveUser(user:any) {

  this.data.user.acessToken = user.accessToken
  this.data.user.userId = user.providerId
  this.data.user.name = user.displayName
  this.data.user.level = null as any as Iuser['level']

/*   this.data.user = {
    'acessToken': user.accessToken,
    'userId': user.providerId,
    'name': user.displayName as string,
    'level': null as any as Iuser['level'],
  } */
   
  }

  async loginIn(email: string, password: string, language: Irequest['language']) {

    const auth = getAuth();

    environment.test ? connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true }) : ''

    signInWithEmailAndPassword(auth, email, password).then((credential:any) => {

      const user = credential.user

      this.data.user.acessToken = user.accessToken
      this.data.user.userId = user.uid
      this.data.user.name = user.displayName
      this.data.user.level = null as any as Iuser['level']

      if (_debug.auth) {
        console.log('Login Sucess')
        console.log(this.data)
      }

    this.router.navigate([`${language}/app/dashboard`])
      return

    }).catch(error => {
      console.log('Login Error')
      console.log(error)
      this.router.navigate([`${language}/login/sign-in`])
      return
    }).finally()

  return

  }
  async loginOut() {

    const auth = getAuth();

    /*  environment.test ? connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true }) : ''; */

    return await signOut(auth).then(() => {
      this.data.exit = true
      this.router.navigate([this.data.language == 'en' ? 'en/login/sign-in' : 'pt/login/sign-in'])
    }).catch((error) => {
      // An error happened.
      console.log('signOut Error')
    });

  }

  async loginGuard() {

    try {

      const user =  getAuth().currentUser;

      if (user) {

        if(_debug.guard) {
          console.log("Guard Sucess")
          console.log(this.data)
        }
        return true
      } else {
        console.log('Guard Error')
        console.log(false)
        console.log(user)
         this.router.navigate([`en/login/sign-in`])
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
