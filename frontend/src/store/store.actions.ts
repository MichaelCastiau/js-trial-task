import {createAction, props} from '@ngrx/store';

export const getUsers = createAction('GET USERS', props<{ a: string }>())
