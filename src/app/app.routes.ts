import { Routes } from '@angular/router';
import { UserComponent } from './components/header/user/user.component';
import { AddUserComponent } from './components/header/add-user/add-user.component';

export const routes: Routes = [
  {
    path:'userList',
    component:UserComponent
  },
  {
    path:'newUser',
    component: AddUserComponent
  },
];
