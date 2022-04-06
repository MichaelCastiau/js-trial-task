import {filter, OperatorFunction} from 'rxjs';
import {coreSelector, IAppState} from './store';
import {IUser} from '../types';
import {select} from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';

export const selectUsers: OperatorFunction<IAppState, Array<IUser>> = state$ => state$.pipe(
  select(coreSelector),
  select(state => state.users)
)
export const selectUsersLength: OperatorFunction<IAppState, number> = state$ => state$.pipe(
  select(coreSelector),
  select(state => state.usersLength)
);
export const selectIsLoading: OperatorFunction<IAppState, boolean> = state$ => state$.pipe(
  select(coreSelector),
  select(state => state.isLoading)
);
export const selectErrorLoadingUsers: OperatorFunction<IAppState, HttpErrorResponse> = state$ => state$.pipe(
  select(coreSelector),
  select(state => state.errorGettingUsers),
  filter(e => !!e)
);
