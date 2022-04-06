import {IUser} from './types';
import * as moment from 'moment';

export const getRelativeLastLoginInMinutes: (user: IUser) => number = (user) => {
  const now = moment();
  const lastLogin = moment(user.last_login);
  return now.diff(lastLogin, 'minutes');
}
