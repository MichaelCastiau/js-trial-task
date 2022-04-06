import {createReducer, on} from '@ngrx/store';
import {IAppState} from './store';
import {getUsers, getUsersBasicInfo, getUsersFail, getUsersSuccess} from './store.actions';
import {getRelativeLastLoginInMinutes} from '../helpers';

export const storeReducer = createReducer<IAppState>({
    users: []
  },
  on(getUsers, (state) => ({
    ...state,
    errorGettingUsers: null
  })),
  on(getUsersFail, (state, {error}) => ({
    ...state,
    errorGettingUsers: error
  })),
  on(getUsersBasicInfo, (state, {users}) => ({
    ...state,
    users: users.map(user => ({
      ...user,
      metadata: {
        recentlyLoggedIn: getRelativeLastLoginInMinutes(user) < 60 * 12
      }
    }))
  })),
  on(getUsersSuccess, (state, {users}) => {
    const composedUsers = state.users.map(user => ({
      ...user,
      ...users.find(u => u.id == user.id)
    }));
    return {
      ...state,
      users: composedUsers
    }
  })
);
