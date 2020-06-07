import { Injectable } from '@angular/core';
import { UserManager, User } from 'oidc-client'
import { Constants } from 'src/constants';
import { Subject } from 'rxjs';
// import randomstring from 'randomstring';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  // state = null;
  // access_token = null;
  // refresh_token = null;
  // scope = null;

  // authorize(): boolean {
  //   this.access_token = null;
	//   this.refresh_token = null;
	//   this.scope = null;
  //   this.state = 'thisneedstoberandom?';//randomstring.generate();
  
  //   let authPayload = {
  //     response_type: 'code',
  //     scope: 'scope',
  //     client_id: 'client_id',
  //     redirect_uri: ['http://localhost:9000/callback'],
  //     state: this.state
  //   }
  //   return false;
  // } 

  private _userManager: UserManager;
  private _user: User;
  private _loginChangedSubject = new Subject<boolean>();

  loginChanged = this._loginChangedSubject.asObservable();

  constructor() { 
    const stsSettings = {
      authority: Constants.stsAuthority,
      client_id: Constants.clientId,
      redirct_uri: `${Constants.clientRoot}signin-callback`,
      scope: 'openid profile dashboard-api',
      response_type: 'code',
      post_logout_redirect_url: `${Constants.clientRoot}signout-callback`
    };
    this._userManager = new UserManager(stsSettings);
  }

  login() {
    return this._userManager.signinRedirect();
  }

  isLoggedIn(): Promise<boolean> {
    return this._userManager.getUser().then(user => {
      const userCurrent = !!user && !user.expired;
      if (this._user !== user)
      {
        this._loginChangedSubject.next(userCurrent);
      }
      this._user = user;
      return userCurrent;
    });
  }

  completeLogin() {
    return this._userManager.signinRedirectCallback().then(user => {
      this._user = user;
      this._loginChangedSubject.next(!!user && !user.expired);
      return user;
    })
  }

  logout() {
    this._userManager.signoutRedirect();
  }

  completeLogout() {
    this._user = null;
    this._userManager.signoutRedirectCallback();
  }

}
