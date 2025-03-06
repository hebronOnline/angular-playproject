import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Task} from './task.model';
import {DatePipe} from '@angular/common';
import {CardComponent} from '../../shared/card/card.component';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [DatePipe, CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>();

  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
