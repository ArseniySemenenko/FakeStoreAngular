import { computed, inject, Service, signal } from '@angular/core';
import { IUser } from '../models/user-model';
import { HttpClient } from '@angular/common/http';

@Service()
export class UserService {
    private readonly http = inject(HttpClient);

    data = localStorage.getItem('currentUser');
    private currentUserItem = signal<IUser>(this.data && JSON.parse(this.data) || {} as IUser);
    readonly currentUser = this.currentUserItem.asReadonly();

    readonly isLogined = computed(() => {
        return JSON.stringify(this.currentUserItem()) !== JSON.stringify({});
    })

    getCurrentUser(){
        return this.currentUserItem();
    }

    setCurrentUser(name: string){
        this.http.get<IUser[]>("https://fakestoreapi.com/users")
        .subscribe((users) => {
            localStorage.setItem('currentUser' , JSON.stringify(users.filter(u => u.username == name)[0]));
            let data = localStorage.getItem('currentUser');
            if(data){
                this.currentUserItem.set(JSON.parse(data));
            }
        })
    }

    setRegistredUser(name: string , password: string , email: string, id: number){
        localStorage.setItem('currentUser' , JSON.stringify({id: id , username: name, password: password , email: email}));
        let data = localStorage.getItem('currentUser');
        if(data){
            this.currentUserItem.set(JSON.parse(data));
        }
    }

    logOut(){
        if(this.isLogined()){
            localStorage.setItem('currentUser' , '');
            this.currentUserItem.set({} as IUser);
        }
    }


    loginUser(name: string , password: string){
        return this.http.post("https://fakestoreapi.com/auth/login" , {
            username: name,
            password: password,
        });
    }

    registerUser(name: string, password: string, email: string){
        return this.http.post<IUser>("https://fakestoreapi.com/users" , {
            username: name,
            password: password,
            email: email,
        });
    }
}
