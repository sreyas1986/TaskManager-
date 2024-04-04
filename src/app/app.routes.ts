import { Routes,RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
//import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path:"dashboard",component:DashBoardComponent},
    {path:"about",component:AboutComponent}
];

// @NgModule({
//     imports:[RouterModule.forRoot(routes)],
//     exports:[RouterModule]

// })
// export class AppRoutingModule{

// }
