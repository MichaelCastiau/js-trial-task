import {Component, OnDestroy, OnInit} from '@angular/core';
import {debounceTime, filter, fromEvent, map, Subject, throttleTime} from 'rxjs';
import {Store} from '@ngrx/store';
import {IAppState} from '../store/store';
import {FormControl} from '@angular/forms';
import {getUsers} from '../store/store.actions';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnDestroy {
  selectInput: FormControl = new FormControl(10);

  private destroy$ = new Subject<void>();

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit(): void {
    fromEvent(window, 'scroll').pipe(
      map(() => document.documentElement.scrollHeight - window.innerHeight),
      map((scrollOffset) => scrollOffset - document.documentElement.scrollTop),
      filter(diff => diff < 200 && diff >= 0),
      debounceTime(500),
      throttleTime(500),
    ).subscribe((any) => this.store.dispatch(getUsers()));

    //initialize app
    this.store.dispatch(getUsers());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
