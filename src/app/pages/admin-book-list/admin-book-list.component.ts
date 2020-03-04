import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-book-list',
  templateUrl: './admin-book-list.component.html',
  styleUrls: ['./admin-book-list.component.css']
})
export class AdminBookListComponent implements OnInit {
  books:Book[];
  datasource;
  displayedColumns: string[] = ['no', 'picture' , 'title', 'author' ,'price', 'stock','categoryName','action'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private bookService:BookService,private categoryService:CategoryService ) { }

  ngOnInit(): void {

    this.bookService.getBooks().subscribe(res=>{
this.books=res;
console.log(this.books);
    this.books.forEach((book,index) => {
      this.books[index]["no"]=index+1;

    });
    this.datasource=new MatTableDataSource<Book>(this.books);
this.datasource.paginator=this.paginator;
    })

  }

deleteBook(bookId:String){
  this.bookService.deletebookId=bookId;
  this.categoryService.deleteCategoryId=0;
//   if(confirm("Kitap siliniyor.!")){
//    this.bookService.deleteBook(bookId).subscribe(res=>{
//      this.ngOnInit();
//  alert("Kitap silindi");
//    })
// }
}


}
