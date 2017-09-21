import { Component, OnInit } from '@angular/core';
import { TodoCategoriesService } from '../../services/todo-categories.service';
import { TodoCategory } from '../../models/todo-category';
import { SettingsService } from '../../services/settings.service';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-chooser-side-bar',
  templateUrl: './category-chooser-side-bar.component.html',
  styleUrls: ['./category-chooser-side-bar.component.css'],
  animations: [
    trigger(
      'sideBarAnimation',
      [
        transition(':enter', [
          style({ transform: 'translateX(-100%)' }),
          animate('0.3s ease-in-out', style({ transform: 'translateX(0%)' }))
        ])
      ]
    )
  ],
})
export class CategoryChooserSideBarComponent implements OnInit {

  constructor(private TodoCategoriesService: TodoCategoriesService, private SettingsService: SettingsService, private router: Router) { }

  ngOnInit() {
  }

  get categories(): TodoCategory[] {
    return this.TodoCategoriesService.categories;
  }

  select(id: number) {
    this.TodoCategoriesService.currentCategory = id;
    this.router.navigateByUrl('/list');
  }

  hideSideBar() {
    this.SettingsService.hideSidebar = true;
  }

  showSideBar() {
    this.SettingsService.hideSidebar = false;
  }

  get isSideBarVisible(): boolean {
    return !this.SettingsService.hideSidebar;
  }

  get currentCategory() {
    return this.TodoCategoriesService.currentCategory;
  }

}
