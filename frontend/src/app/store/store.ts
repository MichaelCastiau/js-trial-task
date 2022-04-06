import {IUser} from '../types';
import {HttpErrorResponse} from '@angular/common/http';
import {createFeatureSelector} from '@ngrx/store';

export interface IAppState {
  isLoading?: boolean;
  usersLength: number;
  users: Array<IUser>;
  errorGettingUsers?: HttpErrorResponse;
}

export const coreSelector = createFeatureSelector<IAppState>('state');
