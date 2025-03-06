import {NgModule} from '@angular/core';
import {TasksComponent} from './tasks.component';
import {NewTaskComponent} from './new-task/new-task.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    TasksComponent,
    TasksComponent,
    NewTaskComponent
  ],
  exports: [TasksComponent],
  imports: [CommonModule]
})
export class TasksModule {
}
