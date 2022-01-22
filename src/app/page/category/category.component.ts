import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  id: Observable<number> = this.activatedRoute.params.pipe(
    map(params => params['catId'])
  );

  catId: number = 0;
  category: Category = new Category();


  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.id.subscribe((catId: number) => {
      console.log(typeof catId);
      this.catId = +catId;
      this.category = this.categoryService.categories.find(el => el.id === this.catId) || new Category();
      //TODO: Nav to 404 if not found
    });
  }

}
