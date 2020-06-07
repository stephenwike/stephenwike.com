import { Component, OnInit } from '@angular/core';
// import { EncryptService } from '../services/encrypt.service';
import { AuthorizationService } from '../services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  hide = true;
  username: string;
  encryptedPassword: string;

  isLoggedIn = false;
  
  constructor(private router: Router) { 
    // this.auth.loginChanged.subscribe(loggedIn => {
    //   this.isLoggedIn = loggedIn;
    // })
  }

  ngOnInit(): void {
    // this.auth.isLoggedIn().then(loggedIn => {
    //   this.isLoggedIn = loggedIn;
    // })
  }

  Login() {
    //this.auth.login()
    this.router.navigateByUrl('');


    // console.log("Logging in with provided credentials");
    //this.encryptedPassword = this.service.Encrypt();
    //console.log(this.encryptedPassword);
  }

  Logout() {
    //this.auth.logout();
  }

  Exit() {
    console.log("Exiting the Login screen. Redirect home.");
    //let decrypted = this.service.Decrypt(this.encryptedPassword);
    //console.log(decrypted);
  }

  Register() {
    console.log("redirecting to register page.");
  }

  FacebookLogin() {
    console.log("Logging in with Facebook credentials.");
  }

  GoogleLogin() {
    console.log("Logging in with Google credentials.");
  }
}
