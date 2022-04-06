import {Actions, createEffect, ofType} from '@ngrx/effects';
import {getUsers, getUsersFail, getUsersSuccess} from './store.actions';
import {catchError, map, of, switchMap} from 'rxjs';
import {Injectable} from '@angular/core';
import {UsersService} from '../services/users.service';

@Injectable()
export class StoreEffects {
  getUsers$ = createEffect(() => this.actions$.pipe(
    ofType(getUsers),
    switchMap(() => this.api.getAllUsers().pipe(
      map(users => getUsersSuccess({users})),
      catchError(err => of(getUsersFail(err)))
    ))
  ));

  constructor(private actions$: Actions, private api: UsersService) {
  }
}
