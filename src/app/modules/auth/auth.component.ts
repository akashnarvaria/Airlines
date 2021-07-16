import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AuthService } from './service/auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as AuthActions from './store/auth.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  error:string=null;
  isLoading=false;
  user:any=[];
  role:string;
  private storeSub:Subscription;
  constructor(private httpClient:HttpClient,
    private authService:AuthService,
    private router:Router,
    private socialauthService: SocialAuthService, private store:Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.storeSub=this.store.select('auth').subscribe(authState=>{
      this.isLoading=authState.loading;
      this.error=authState.authError;
    });
  }

  login(form:NgForm,role:string){
   // this.isLoading=true;
    if(!form.valid){
      return;
    }
    this.store.dispatch(new AuthActions.UserRole({email:form.value.email,password:form.value.password,role:role}));
    form.reset();
  }

  onHandleError(){
    this.store.dispatch(new AuthActions.ClearError());
  }

  onGoogleSignIn(role:string){
    this.socialauthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user=>{
      this.isLoading=true;
      console.log(user);
      this.authService.userRole().subscribe(data=>{
        let userExist=JSON.parse(JSON.stringify(data));
        let loggedIn=false;
        for(let i=0;i<userExist.length;i++){
          if(user.email===userExist[i].email && userExist[i].role===role){
            this.authService.googleSignIn(user.idToken).subscribe(res=>{
              console.log(res);
              let userData=JSON.parse(JSON.stringify(res));
              this.authService.handleAuthentication(userData.email,userData.localId,userData.idToken,+userData.expiresIn,role);
              this.authService.setRole(role);
              localStorage.setItem('role',JSON.stringify(role));
              this.isLoading=false;
              if(role=='staff'){
                this.router.navigate(['/staff']);
              }
              if(role=='admin'){
                this.router.navigate(['/admin']);
              }
            },err=>{
              console.log(err);
            });
            loggedIn=true;
            i=userExist.length;
          }
          
        }
        if(!loggedIn){
          this.error="Email does not exist!!";
          this.isLoading=false;
        }
      },errorResp=>{
        this.error=errorResp;
        this.isLoading=false;
      });
    })
  }

  ngOnDestroy(){
    if(this.storeSub){
      this.storeSub.unsubscribe();
    }
  }

}
