import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { SimpleRedirectComponent } from './pages/simple-redirect/simple-redirect.component';
import { CoreModule } from './core/core.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { LeftTabComponent } from './pages/tabs/pages/left-tab/left-tab.component';
import { RightTabComponent } from './pages/tabs/pages/right-tab/right-tab.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserPageComponent,
    SimpleRedirectComponent,
    NotFoundComponent,
    TabsComponent,
    LeftTabComponent,
    RightTabComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
