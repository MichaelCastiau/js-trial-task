import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../store/store';
import {getUsers} from '../store/store.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.store.dispatch(getUsers({a: ''}))
  }
}
