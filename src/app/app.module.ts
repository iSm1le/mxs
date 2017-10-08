import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { SharedModule } from './components/shared/shared.module';
import { PanelComponent } from './components/panel/panel.component';
import { AuthComponent } from './components/auth/auth.component';
import { SidebarComponent } from './components/panel/sidebar/sidebar.component';
import { PusersComponent } from './components/panel/content/pusers/pusers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    PanelComponent,
    AuthComponent,
    SidebarComponent,
    PusersComponent,
  ],
  imports: [
    RoutingModule,
    SharedModule
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    UserService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
