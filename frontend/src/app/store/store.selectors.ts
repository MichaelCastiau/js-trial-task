import {OperatorFunction} from 'rxjs';
import {coreSelector, IAppState} from './store';
import {IUser} from '../types';
import {select} from '@ngrx/store';

export const selectUsers: OperatorFunction<IAppState, Array<IUser>> = state$ => state$.pipe(
  select(coreSelector),
  select(state => state.users)
)
export const selectUsersLength: OperatorFunction<IAppState, number> = state$ => state$.pipe(
  select(coreSelector),
  select(state => state.usersLength)
);
