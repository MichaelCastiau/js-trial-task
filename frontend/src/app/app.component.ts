import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from './store/store';
import {Observable} from 'rxjs';
import {IUser} from './types';
import {selectUsers} from './store/store.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'frontend';

  users$: Observable<Array<IUser>>;

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.users$ = this.store.pipe(selectUsers);
  }
}
