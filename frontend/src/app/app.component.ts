import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from './store/store';
import {Observable} from 'rxjs';
import {IUser} from './types';
import {selectErrorLoadingUsers, selectIsLoading, selectUsers} from './store/store.selectors';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  users$: Observable<Array<IUser>>;
  isLoading$: Observable<boolean>;
  errorLoadingUsers$: Observable<HttpErrorResponse>;

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.users$ = this.store.pipe(selectUsers);
    this.isLoading$ = this.store.pipe(selectIsLoading);
    this.errorLoadingUsers$ = this.store.pipe(selectErrorLoadingUsers);
  }
}
