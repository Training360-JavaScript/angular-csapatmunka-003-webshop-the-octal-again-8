import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category.model';
import { CategoryService } from '../service/category.service';
import { ConfigService, IMenuItem } from '../service/config.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  appName: string = this.config.appName;
  menuItems: IMenuItem[] = this.config.menuItems;
  categoryList: Category[] = this.categories.categories;

  constructor(
    private config: ConfigService,
    private categories: CategoryService
  ) { }

  ngOnInit(): void {
  }

}
