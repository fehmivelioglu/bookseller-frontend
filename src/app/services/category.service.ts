import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Category } from '../models/category';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
deleteCategoryId;
  constructor(@Inject ('apiUrl') private apiUrl,private http:HttpClient) { }

  // getAllCategories(){
  //   return this.http.get(this.apiUrl+"/category");
  // }
  addCategory(category:Category){
    return this.http.post<any>(this.apiUrl+"/category",category);
  }
  getCategories(){
    return this.http.get<any>(this.apiUrl+"/category").pipe(map(result=>result.data));
  }
  updateCategories(categoryId:String,category:Category){
    return this.http.put<any>(this.apiUrl+"/category/"+categoryId,category);
  }
  deleteCategories(categoryId:String){
    console.log(categoryId);
    return this.http.delete<any>(this.apiUrl+"/category/"+categoryId);
  }
  // getCategoryById(id:String){
  //   return this.http.get<any>(this.apiUrl+"/category/"+id).pipe(map(result=>result.data));
  // }
}

