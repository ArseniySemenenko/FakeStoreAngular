import { Component , model, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  imports: [RouterLink],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css',
})
export class SideBar {
  isShow = model<boolean>();
  priceFrom = signal(0);
  priceTo = signal(1000);
}
