import {createReducer, on} from '@ngrx/store';
import {IAppState} from './store';
import {getUsers, getUsersFail, getUsersSuccess} from './store.actions';

export const storeReducer = createReducer<IAppState>({users: []},
  on(getUsers, (state) => ({
    ...state,
    errorGettingUsers: null
  })),
  on(getUsersFail, (state, {error}) => ({
    ...state,
    errorGettingUsers: error
  })),
  on(getUsersSuccess, (state, {users}) => ({
    ...state,
    users
  }))
);
