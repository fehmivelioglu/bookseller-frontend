import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
deletebookId;
  constructor(@Inject ('apiUrl') private apiUrl,private http:HttpClient) { }

  addBook(book:Book){
   return this.http.post<any>(this.apiUrl+"/book",book);
  }
  getBooks(){
    return this.http.get<any>(this.apiUrl+"/book").pipe(map(res=>res.data));
  }
  updateBook(bookId:String,book:Book){
   return this.http.put<any>(this.apiUrl+"/book/"+bookId,book);
  }
  deleteBook(deletebookId:String){
   return this.http.delete<any>(this.apiUrl+"/book/"+deletebookId);
  }
  saveBookImage(image){
    return this.http.post<any>(this.apiUrl+"/book/saveImage",image);
  }
   getBookById(id:String){
    return this.http.get<any>(this.apiUrl+"/book/"+id).pipe(map(result=>result.data));
  }
  getBooksByCategoryId(categoryId:String){
    return this.http.get<any>(this.apiUrl+"/books/"+categoryId).pipe(map(result=>result.data));
  }
}
