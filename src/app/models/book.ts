import { Category } from './category';

export class Book {
  _id:String;
  title:String ;
 author:String ;
 stock:number;
 price:number;
 picture:String;
 categoryBy:Category;
}
