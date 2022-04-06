import {Component, Input} from '@angular/core';
import {IUser} from '../types';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent {
  @Input()
  user: IUser;
}
