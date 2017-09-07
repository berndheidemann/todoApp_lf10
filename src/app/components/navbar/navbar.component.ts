import { Component, OnInit } from '@angular/core';
import { TodoPersistanceService } from '../../services/todo-persistance.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private todoPersistanceService: TodoPersistanceService) { }

  ngOnInit() {
  }

  deleteAll() {
    this.todoPersistanceService.deleteAll();
  }

  genTestData() {
    this.todoPersistanceService.generateTestData();
  }

}
