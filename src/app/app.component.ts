import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DashBoardComponent } from "./dash-board/dash-board.component";
import { AboutComponent } from './about/about.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,RouterLink, DashBoardComponent,AboutComponent]
})
export class AppComponent {
  title = 'TaskManager';
}
