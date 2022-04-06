import {createAction, props} from '@ngrx/store';
import {IUser} from '../types';
import {HttpErrorResponse} from '@angular/common/http';

export const getUsers = createAction('GET USERS', props<{ length?: string }>())
export const getUsersSuccess = createAction('GET USERS SUCCESS', props<{ users: Array<IUser> }>());
export const getUsersFail = createAction('GET USERS FAIL', props<{ error: HttpErrorResponse }>());
