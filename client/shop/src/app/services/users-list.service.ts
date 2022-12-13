import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersListService {
  private apiUrl = '/users';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.API_URL + this.apiUrl);
  }
}
