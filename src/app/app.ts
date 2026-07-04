import { Component, signal } from '@angular/core';
import { RouterOutlet , RouterLink} from '@angular/router';
import { SideBar } from './components/side-bar/side-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink , SideBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showSideBar = signal<boolean>(false);
}
