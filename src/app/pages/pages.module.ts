import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../modules/material.module";

import { MainLayoutComponent } from "../layouts/main-layout/main-layout.component";
import { AdminLayoutComponent } from "../layouts/admin-layout/admin-layout.component";

import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "../nav/header/header.component";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { CategoryNeweditComponent } from './category-newedit/category-newedit.component';
import { AdminCategoryListComponent } from './admin-category-list/admin-category-list.component';
import { AdminBookListComponent } from './admin-book-list/admin-book-list.component';
import { BookNeweditComponent } from './book-newedit/book-newedit.component';;
import{CategoryMenuComponent} from "../nav/category-menu/category-menu.component";
import { BookComponent } from './book/book.component'
import { NgxEditorModule } from 'ngx-editor';
@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent,
    HeaderComponent,
    AdminLayoutComponent,
    AdminHomeComponent,
    CategoryNeweditComponent,
    AdminCategoryListComponent,
    AdminBookListComponent,
    BookNeweditComponent,
    CategoryMenuComponent,
    BookComponent
  ],
  imports: [CommonModule, RouterModule, MaterialModule,NgxEditorModule]
})
export class PagesModule {}
