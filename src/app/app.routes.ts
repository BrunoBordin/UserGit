import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserGitComponent } from './list-user-git/list-user-git.component';

const routes: Routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'users', component: ListUserGitComponent }  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }