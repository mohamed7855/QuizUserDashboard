import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../../Base/Env';
import { UserResponse, UsersResponse } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _HttpClient:HttpClient) { }

  getUsers(page:string):Observable<UsersResponse>{
    return this._HttpClient.get<UsersResponse>(`${env.baseUrl}/users?page=${page}`)
  }

  getUserDetails(id:string):Observable<UserResponse>{
    return this._HttpClient.get<UserResponse>(`${env.baseUrl}/users/${id}`)
  }
}
