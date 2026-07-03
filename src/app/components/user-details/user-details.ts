import { Component, inject, signal, computed, output} from '@angular/core';
import { UserService } from '../../services/user-service';
import { IUser} from '../../models/user-model';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  private readonly userService = inject(UserService);

  currentUser = computed(() => <IUser>(this.userService.getCurrentUser()));

  onLogOut = output();

  logOut(){
    this.userService.logOut();
    this.onLogOut.emit();
  }
}
