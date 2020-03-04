import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Category } from 'src/app/models/category';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-login',
  templateUrl: './edit-login.component.html',
  styleUrls: ['./edit-login.component.css']
})
export class EditLoginComponent implements OnInit {
username;
book:Book[];
category:Category[];
editId;
  constructor(private router:Router,private route:ActivatedRoute,private bookService:BookService,
    private categoryService:CategoryService,private authService:AuthService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(res=>{
      this.book=res;

    })
    this.categoryService.getCategories().subscribe(res=>{
      this.category=res;
    })
  }
  onSubmit(){


    if(this.username=="favfav"){
      this.authService.setUserLoggedIn();
      this.editId=this.route.snapshot.paramMap.get("id");
      this.category.forEach(element => {
        if(element._id==this.editId){
        this.router.navigateByUrl("/admin/category/"+this.editId);
        }
      });
this.book.forEach(element => {
  if(element._id==this.editId){
    this.router.navigateByUrl("/admin/book/"+this.editId);
  }

});


    }
else{
  alert("hatalı giriş yaptınız");
  this.router.navigateByUrl("/admin");
}
  }

}
