import { inject, Service, signal } from '@angular/core';
import { IUser } from '../models/user-model';
import { HttpClient } from '@angular/common/http';
import { catchError , of } from 'rxjs';

@Service()
export class UserService {
    private readonly http = inject(HttpClient);

    private currentUser = signal<IUser>({} as IUser);


    getCurrentUser(){
        return this.currentUser();
    }

    setCurrentUser(user: IUser){
        console.log("set: " , user);
        this.currentUser.set(user);
    }

    loginUser(name: string , password: string){
        return this.http.post("https://fakestoreapi.com/auth/login" , {
            username: name,
            password: password,
        });
    }
}
