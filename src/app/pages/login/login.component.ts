import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username;
  constructor(private bookService:BookService,private router:Router,private categoryService:CategoryService) { }

  ngOnInit(): void {

  }
onSubmit(){
  if(this.bookService.deletebookId!=0){
  if(this.username=="favfav"){
    if(confirm("Kitap siliniyor.!")){
         this.bookService.deleteBook(this.bookService.deletebookId).subscribe(res=>{
       alert("Kitap silindi");
       this.router.navigateByUrl("/admin");
       this.bookService.deletebookId=0;
         })

      }
  }
  else{
    alert("hatalı giriş yaptınız");
     this.router.navigateByUrl("/admin");
     this.bookService.deletebookId=0;
  }
}
//----------
if(this.categoryService.deleteCategoryId!=0){
  if(this.username=="favfav"){
    if(confirm("Kategori siliniyor.!")){
         this.categoryService.deleteCategories(this.categoryService.deleteCategoryId).subscribe(res=>{
       alert("Kategori silindi");
       this.router.navigateByUrl("/admin");
       this.categoryService.deleteCategoryId=0;
         })

      }
  }
  else{
    alert("hatalı giriş yaptınız");
     this.router.navigateByUrl("/admin");
     this.categoryService.deleteCategoryId=0;
  }
}


}
}
