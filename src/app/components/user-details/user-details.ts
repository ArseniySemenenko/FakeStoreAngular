import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  private readonly userService = inject(UserService);

  currentUser = this.userService.getCurrentUser();
}
