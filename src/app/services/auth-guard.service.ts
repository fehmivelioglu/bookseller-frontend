import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private router:Router , private authService:AuthService ) {}
  canActivate(
    route: import("@angular/router").ActivatedRouteSnapshot,
    state: import("@angular/router").RouterStateSnapshot
  ):
    | boolean
  {
    if(this.authService.getUserLoggedIn()){
return true;
    }
   else{
     this.router.navigateByUrl("/");
     return false;
   }

  }

}

