import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {UsersService} from './services/users.service';
import {HttpClientModule} from '@angular/common/http';
import {StoreEffects} from './store/store.effects';
import {storeReducer} from './store/store.reducer';
import {CommonModule} from '@angular/common';
import {PaginationComponent} from './pagination/pagination.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RelativeLoginPipe} from './pipes/relative-login.pipe';
import { HeaderComponent } from './header/header.component';
import { UserItemComponent } from './user-item/user-item.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    RelativeLoginPipe,
    HeaderComponent,
    UserItemComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    StoreModule.forRoot({state: storeReducer}, {initialState: {}}),
    EffectsModule.forRoot([StoreEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
      logOnly: environment.production
    }),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
