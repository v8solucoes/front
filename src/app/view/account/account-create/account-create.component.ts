import { Component } from '@angular/core';
import { DataService } from '@repository/data.service';
import { IcreateForm, ImodelUser, Irequest, IresponseValidatorCompose } from '@domain/interface';
import { connectAuthEmulator, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseApp } from '@angular/fire/compat';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})

export class AccountCreateComponent {

  loading = false;
  valid = true;
  processing = false;
  sucess = false;

  createForm: IcreateForm;

  constructor(
    private router: Router,
    public firebaseApp: FirebaseApp,
    public data: DataService,
  ) {

    this.createForm = this.data.createForm('account-adm')
    
  }
  
  ngOnInit() {
    this.loading = true;
}
  async createAccount() {
    const accounAdm = this.createForm.form.value
    const user = accounAdm[this.createForm.request.document] as ImodelUser
   
    this.valid = false
    this.processing = true;

    this.createForm.request.data =  accounAdm 

    console.log(user)
   console.log(this.createForm.request)


    this.data.httpCRUDResponseCompose(this.createForm.request as Irequest).subscribe((response: IresponseValidatorCompose| null) => {
   
      console.log(response)
      if (response == null) {
        
        setTimeout(() => {
   /*        this.createForm.form.reset() */
          this.processing = false 
          this.sucess = true
          const auth = getAuth();
          connectAuthEmulator(auth, "http://localhost:9099");
          signInWithEmailAndPassword(auth, user.email, user.password).then(o => {
             console.log('Logado')
            console.log(o)
            this.router.navigate(['login'])
           })
         
        }, 2000);
        this.processing = false
      } else {

        return null
      }
      return
    })
  }
  async googleAuth() {
    const auth = getAuth();
    connectAuthEmulator(auth, "http://localhost:9099");
    signInWithPopup(auth, new GoogleAuthProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        console.log('tokem')
        console.log(token)
        // The signed-in user info.
        const user = result.user;
        console.log('user')
        console.log(user)
        // ...
      }).catch((error) => {
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