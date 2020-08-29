import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { CategoryNeweditComponent } from './pages/category-newedit/category-newedit.component';
import { BookNeweditComponent } from './pages/book-newedit/book-newedit.component';
import { BookComponent } from './pages/book/book.component';
import { LoginComponent } from './pages/login/login.component';
import { EditLoginComponent } from './pages/edit-login/edit-login.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [{
  path:"",
  component:MainLayoutComponent,
  children:[
    {
      path:"",
      component:HomeComponent
    },
    {
      path:"kategori/:id",
      component:HomeComponent
    },
    {
      path:"book/:id",
    component:BookComponent
  }

  ]
},
{
  path:"admin",
  component:AdminLayoutComponent,
  children:[{
    path:"",
    component:AdminHomeComponent
  },
  {
    path:"category",
    component:CategoryNeweditComponent
  },
  {
    path:"category/:id",
    canActivate:[AuthGuardService],
    component:CategoryNeweditComponent
  },
   {
     path:"book",
     component:BookNeweditComponent
   },
   {
     path:"book/:id",
     canActivate:[AuthGuardService],
     component:BookNeweditComponent
   }
  ]
},
{
  path:"login",
  component:LoginComponent
},
{
  path:"editlogin/:id",
  component:EditLoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
