import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingInterceptorService implements HttpInterceptor {

  constructor(private router:Router) { }
  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {

   return next.handle(req).pipe(catchError(error=>{
     console.log(error);
     if(error.status=="404"){
       alert("sayfa bulunamadı");
     }
     else{
       alert("bir hata meydana geldi.Lütfen daha sonra tekrar deneyiniz.")
     }
     this.router.navigateByUrl("/");
     return throwError(error);
   }))
    throw new Error("Method not implemented.");
  }
}
