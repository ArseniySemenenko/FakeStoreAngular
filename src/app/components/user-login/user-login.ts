import { Component, inject, linkedSignal, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { FormsModule } from '@angular/forms';
import { catchError , of } from 'rxjs';
import { IUser } from '../../models/user-model';
import { UserDetails } from '../user-details/user-details';
@Component({
  selector: 'app-user-login',
  imports: [FormsModule , UserDetails],
  templateUrl: './user-login.html',
  styleUrl: './user-login.css',
})
export class UserLogin {
  private readonly userService = inject(UserService);

  isLogined = signal<boolean>(this.userService.isLogined());

  currentUser = linkedSignal<IUser>(() => {
    if(this.isLogined()){
      console.log('logined' , this.userService.getCurrentUser());
      return this.userService.getCurrentUser();
    }
    else{
      return {} as IUser;
    }
  });

  name = signal<string>("");
  password = signal<string>("");

  errorLogin = signal<string | null>(null);


  handleLogOut(){
    this.isLogined.set(false);
    this.name.set("");
    this.password.set("");
  }

  loginUser(){
    if(this.name() && this.password()){
        let res;
        this.userService.loginUser(this.name() , this.password())
        .pipe(
          catchError(() => {
            console.log("error");
            this.errorLogin.set("Wrong username or password")
            this.name.set("");
            this.password.set("");
            return of([]);
          })
        )
        .subscribe(
          (r) => {
            res = r;
            console.log("res: " , r);
            if(JSON.stringify(r) !== JSON.stringify([])){
              this.errorLogin.set(null)
              this.isLogined.set(true);
              this.userService.setCurrentUser(this.name());
            }
          }
        );
    }
    else{ 
      this.errorLogin.set("Username and password cant be empty")
    }
  }
}
