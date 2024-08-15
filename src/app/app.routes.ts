import { Routes } from '@angular/router';
import { NotFoundComponent } from './layout/additions/not-found/not-found.component';
import { UsersComponent } from './layout/pages/users/users.component';
import { UserDetailsComponent } from './layout/additions/user-details/user-details.component';

export const routes: Routes = [
    {path: '', redirectTo: 'users', pathMatch: 'full'},
    {path: 'users', component: UsersComponent, title: 'Users'},
    {path: 'details/:id', component: UserDetailsComponent, title: 'UserDetails'},
    {path: '**', component: NotFoundComponent, title: 'NotFound'},
];
