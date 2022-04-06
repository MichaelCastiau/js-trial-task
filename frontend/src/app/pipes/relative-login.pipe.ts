import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';
import {IUser} from '../types';

@Pipe({
  pure: false,
  name: 'relativeLogin'
})
export class RelativeLoginPipe implements PipeTransform {
  transform(value: IUser, ...args: any[]): any {
    const now = moment();

    if (value.online_status != 'OFFLINE') {
      return '';
    }

    const diff = now.diff(moment(value.last_login), 'minutes');

    if (diff < 60) {
      return `${diff} min ago`
    } else if (diff * 60 < 12) {
      return `${Math.round(diff / 60)}h ago`
    } else {
      return `${Math.round(diff / (60 * 12))}d ago`
    }
  }

}
