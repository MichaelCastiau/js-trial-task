import {Actions, createEffect, ofType} from '@ngrx/effects';
import {getUsers, getUsersBasicInfo, getUsersFail, getUsersSuccess} from './store.actions';
import {catchError, map, of, switchMap} from 'rxjs';
import {Injectable} from '@angular/core';
import {UsersService} from '../services/users.service';

@Injectable()
export class StoreEffects {
  getUserIds$ = createEffect(() => this.actions$.pipe(
    ofType(getUsers),
    switchMap((action) => this.api.getUsersBasicInfo(action.length).pipe(
      map(users => getUsersBasicInfo({users})),
      catchError(err => of(getUsersFail(err)))
    ))
  ));

  getUserDetails$ = createEffect(() => this.actions$.pipe(
    ofType(getUsersBasicInfo),
    switchMap((action) => this.api.getUserDetails(action.users.map(user => user.id)).pipe(
      map(users => getUsersSuccess({users})),
      catchError(err => of(getUsersFail(err)))
    ))
  ))

  constructor(private actions$: Actions, private api: UsersService) {
  }
}
