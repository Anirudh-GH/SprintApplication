import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import {AddTaskComponent} from './components/add-task/add-task.component'
import {GoogleAuthComponent} from './components/google-auth/google-auth.component'
import { TaskListComponent } from './components/task-list/task-list.component'
const routes: Routes = [
  {path :'',component:GoogleAuthComponent },
  { path: 'add-task', component: AddTaskComponent},
  {path :'task-list',component: TaskListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }