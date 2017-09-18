import { Component, OnInit } from '@angular/core';
import { TodoPersistanceService } from '../../services/todo-persistance.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {


  listSort = false;
  showDelete = true;

  constructor(private todoPersistanceService: TodoPersistanceService, private settingsService: SettingsService) { }

  ngOnInit() {
    this.listSort = this.settingsService.listSort;
    this.showDelete = this.settingsService.showDelete;
  }

  deleteAll() {
    this.todoPersistanceService.deleteAll();
  }

  genTestData() {
    this.todoPersistanceService.generateTestData();
  }

  save() {
    this.settingsService.listSort = this.listSort;
    this.settingsService.showDelete = this.showDelete;
  }


}
