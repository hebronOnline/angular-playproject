import {Component, Input} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {dummyTasks} from './dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() userName?: string;
  @Input() userId?: string;

  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId)
  }
}
