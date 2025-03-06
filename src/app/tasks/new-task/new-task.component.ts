import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {NewTask} from '../task/task.model';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  title = '';
  summary = '';
  dueDate = '';

  @Output() addTask = new EventEmitter<NewTask>();

  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onAddTask() {
    this.tasksService.addNewTask({
      title: this.title,
      dueDate: this.dueDate,
      summary: this.summary
    }, this.userId);
    this.close.emit();
  }
}
