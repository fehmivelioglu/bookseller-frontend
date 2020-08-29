import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Category} from "../../models/category";
import { CategoryService } from 'src/app/services/category.service';
import { BookService } from 'src/app/services/book.service';
@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {
categories:Category[];
datasource;
displayedColumns: string[] = ['no', 'name', 'action'];
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private categoryService:CategoryService,private bookService:BookService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(result=>{
      this.categories=result;
      this.categories.forEach((category,index)=>{
        this.categories[index]["no"]=index+1;
      })
      this.datasource=new MatTableDataSource<Category>(this.categories);
this.datasource.paginator=this.paginator;
    })

  }
  deleteCategory(categoryId:String){
  //   if(confirm("Kategori siliniyor")){
  // this.categoryService.deleteCategories(categoryId).subscribe(res=>{

  //   this.ngOnInit();
  //   //TEKRAR AJAX İSTEGİ YAPMAMAK ISTERSEK ALTTAKI KODU YAZABILIRIZ
  //   // let category=this.categories.filter(x=>x._id==categoryId)[0];
  //   // let index=this.categories.indexOf(category);
  //   // this.categories.splice(index,1);
  //   // this.datasource=new MatTableDataSource<Category>(this.categories);

  //   alert("Kategori silindi");
  // });
  // }
  this.categoryService.deleteCategoryId=categoryId;
  this.bookService.deletebookId=0;

  }
}
