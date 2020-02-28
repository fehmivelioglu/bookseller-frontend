import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/services/category.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Category } from "src/app/models/category";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-category-newedit",
  templateUrl: "./category-newedit.component.html",
  styleUrls: ["./category-newedit.component.css"]
})
export class CategoryNeweditComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}
  categoryId: String;
  category: Category;
  categoryForm: FormGroup;
  title: String;
  btnText: String;
  type: String;
  progressBar: boolean;

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get("id");
    if (this.categoryId == null) {
      this.title = "Kategori ekle";
      this.btnText = "Ekle";
      this.type = "add";
      this.progressBar = false;
    }
    else{
      this.title = "Kategori ismini güncelle";
      this.btnText = "Güncelle" ;
      this.type="update";
      this.progressBar=false;
    }

    this.categoryForm = new FormGroup({
      name: new FormControl("", Validators.required)
    });
  }
  onSubmit() {
    this.progressBar = true;
    if (this.categoryForm.invalid) {
      this.progressBar = false;
    }
    if (this.categoryForm.valid) {
      if (this.type == "add") {
        this.categoryService
          .addCategory(this.categoryForm.value)
          .subscribe(res => {
            this.router.navigateByUrl("/admin");
            this.progressBar = false;
          });
      } else {
        this.categoryService.updateCategories(this.categoryId,this.categoryForm.value).subscribe(res=>{
        this.router.navigateByUrl("/admin");
        this.progressBar=false;
        });
      }
    }
  }
}
