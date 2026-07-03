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

  login = signal<boolean>(true);

  isLogined = signal<boolean>(this.userService.isLogined());

  currentUser = linkedSignal<IUser>(() => {
    if(this.isLogined()){
      return this.userService.getCurrentUser();
    }
    else{
      return {} as IUser;
    }
  });

  name = signal<string>("");
  password = signal<string>("");
  email = signal<string>("");

  errorLogin = signal<string | null>(null);


  handleLogOut(){
    this.isLogined.set(false);
    this.name.set("");
    this.password.set("");
  }

  loginUser(){
    if(this.name() && this.password()){
        this.userService.loginUser(this.name() , this.password())
        .pipe(
          catchError(() => {
            this.errorLogin.set("Wrong username or password")
            this.name.set("");
            this.password.set("");
            return of([]);
          })
        )
        .subscribe(
          (r) => {
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

  registerUser(){
    if(this.name() && this.password() && this.email()){
      this.userService.registerUser(this.name() , this.password() , this.email())
      .pipe(
          catchError(() => {
            this.errorLogin.set("Wrong register")
            this.name.set("");
            this.password.set("");
            this.email.set("");
            return of([]);
          })
        )
      .subscribe({
        next: (data) => {
          if('id' in data){
            this.errorLogin.set(null)
            this.isLogined.set(true);
            this.userService.setRegistredUser(this.name() , this.password() , this.email(), data.id );
          }
        }
      })
    }
    else{
      this.errorLogin.set("Fields cant be empty")
    }
  }
}
