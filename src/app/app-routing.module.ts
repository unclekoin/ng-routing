import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SimpleRedirectComponent } from './pages/simple-redirect/simple-redirect.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import {
  LeftTabComponent
} from './pages/tabs/pages/left-tab/left-tab.component';
import {
  RightTabComponent
} from './pages/tabs/pages/right-tab/right-tab.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'simple', component: SimpleRedirectComponent },
  { path: 'user/:id', component: UserPageComponent },

  { path: 'lazy-loaded', loadChildren: () =>
      import('./lazy-loaded/lazy-loaded.module')
        .then((m) => m.LazyLoadedModule) },

  {
    path: 'parent',
    component: TabsComponent,
    children: [
      { path: 'left', component: LeftTabComponent },
      { path: 'right', component: RightTabComponent },
    ]
  },
  {
    path: 'another',
    loadChildren: () =>
      import('./another-module/another.module')
        .then((m) => m.AnotherModule)
  },

  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
