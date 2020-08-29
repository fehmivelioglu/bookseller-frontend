import { Component, OnInit } from "@angular/core";
import { BookService } from "src/app/services/book.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Book } from "src/app/models/book";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Category } from "src/app/models/category";
import { CategoryService } from "src/app/services/category.service";
import { map, mergeMap } from "rxjs/operators";

@Component({
  selector: "app-book-newedit",
  templateUrl: "./book-newedit.component.html",
  styleUrls: ["./book-newedit.component.css"]
})
export class BookNeweditComponent implements OnInit {




  formGroup: any;
  constructor(
    private bookService: BookService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  formData: FormData = null;
  bookId: String;
  book: Book;
  bookForm: FormGroup;
  title: String;
  btnText: String;
  type: String;
  categories: Category[];
  progressBar: Boolean;

  //kategoriyi alııp kısa yoldan kontrol etmek için
// get category(){
//   return this.bookForm.get("categoryBy");
// }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
    });
    this.bookId = this.route.snapshot.paramMap.get("id");
    if (this.bookId == null) {
      this.title = "Yeni Kitap Ekle";
      this.btnText = "Ekle";
      this.type = "add";
      this.progressBar = false;
    } else {
      this.title = "Kitabı Güncelle";
      this.btnText = "Güncelle";
      this.type = "update";
      this.progressBar = false;
      this.bookService.getBookById(this.bookId).subscribe(res=>{
        this.book=res;
        this.bookForm.controls.title.setValue(this.book.title);
        this.bookForm.controls.author.setValue(this.book.author);
        this.bookForm.controls.categoryBy.setValue(this.book.categoryBy);
        this.bookForm.controls.price.setValue(this.book.price);
        this.bookForm.controls.stock.setValue(this.book.stock);
        this.bookForm.controls.picture.setValue(this.book.picture);
      });
    }
    this.bookForm = new FormGroup({
      title: new FormControl("", Validators.required),
      author: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
      stock: new FormControl("", Validators.required),
      picture: new FormControl(""),
      categoryBy: new FormControl("",Validators.required)
    });

  }
  onSubmit() {
    this.progressBar = true;
    if (this.bookForm.invalid) {
      this.progressBar = false;
    }
    if (this.bookForm.valid) {
      if (this.type == "add") {
        this.bookService
          .saveBookImage(this.formData)
          .pipe(
            map(
              res => {
                this.bookForm.controls.picture.setValue(res.url);
              },
            ),
            mergeMap(() => this.bookService.addBook(this.bookForm.value))
          )
          .subscribe(res => {
            this.router.navigateByUrl("/admin");
            this.progressBar = false;
          });
      } else {
        if(this.formData==null){
this.bookService.updateBook(this.bookId,this.bookForm.value).subscribe(res=>{
this.router.navigateByUrl("/admin");
this.progressBar=false;
})


        }
        else{
        this.bookService.saveBookImage(this.formData).pipe(map(res=>{
          this.bookForm.controls.picture.setValue(res.url);
        },),mergeMap(()=>this.bookService.updateBook(this.bookId,this.bookForm.value))).subscribe(res=>{
          this.router.navigateByUrl("/admin");
          this.progressBar=false;
          // console.log(this.bookForm.value);
        })
      }
      }
    }

  }
  upload(files) {
    let fileData = files.target.files[0];
    this.formData = new FormData();
    this.formData.append("picture", fileData);
  }
  displayCategoryName(category){
    if(category){
      return category.name;
    }
    else{
      return null;
    }
  }

}

