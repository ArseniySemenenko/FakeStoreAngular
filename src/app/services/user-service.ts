import { inject, Service, signal } from '@angular/core';
import { IUserLogin } from '../models/user-model';
import { HttpClient } from '@angular/common/http';
import { catchError , of } from 'rxjs';

@Service()
export class UserService {
    private readonly http = inject(HttpClient);

    private currentUser = signal<IUserLogin>({} as IUserLogin);


    getCurrentUser(){
        return this.currentUser();
    }

    setCurrentUser(user: IUserLogin){
        console.log("set: " , user);
        this.http.get<IUserLogin[]>("https://fakestoreapi.com/users")
        .subscribe((users) => {
            this.currentUser.set(users.filter(u => u.username == user.username)[0])
            console.log(users.filter(u => u.username == user.username))
            console.log(users);
        })

    }

    loginUser(name: string , password: string){
        return this.http.post("https://fakestoreapi.com/auth/login" , {
            username: name,
            password: password,
        });
    }
}
