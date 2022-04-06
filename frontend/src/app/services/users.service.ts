import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from '../types';
import {map, Observable} from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {
  }

  getAllUsers(length?: number): Observable<Array<IUser>> {
    return this.http.get<{ items: Array<IUser> }>('/api/search', length && {
      params: {length: length}
    }).pipe(map(result => result.items))
  }
}
