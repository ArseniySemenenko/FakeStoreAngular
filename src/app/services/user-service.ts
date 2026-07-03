import { inject, Service, signal } from '@angular/core';
import { IUser } from '../models/user-model';
import { HttpClient } from '@angular/common/http';

@Service()
export class UserService {
    private readonly http = inject(HttpClient);

    //private currentUser = signal<IUser>({} as IUser);
    data = localStorage.getItem('currentUser');
    private currentUser = signal<IUser>(this.data && JSON.parse(this.data) || {} as IUser);


    isLogined(){
        return JSON.stringify(this.currentUser()) != JSON.stringify({});
    }

    getCurrentUser(){
        console.log("get current: " , this.currentUser);
        return this.currentUser();
    }

    setCurrentUser(name: string){
        console.log("set: " , name);
        this.http.get<IUser[]>("https://fakestoreapi.com/users")
        .subscribe((users) => {
            localStorage.setItem('currentUser' , JSON.stringify(users.filter(u => u.username == name)[0]));
            let data = localStorage.getItem('currentUser');
            if(data){
                this.currentUser.set(JSON.parse(data));
            }
        })

    }

    logOut(){
        if(this.isLogined()){
            localStorage.setItem('currentUser' , '');
            this.currentUser.set({} as IUser);
        }
    }


    loginUser(name: string , password: string){
        return this.http.post("https://fakestoreapi.com/auth/login" , {
            username: name,
            password: password,
        });
    }
}
