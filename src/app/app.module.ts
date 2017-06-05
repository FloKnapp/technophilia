import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventsComponent } from './site/events/events.component';
import { MenuComponent } from './menu/menu.component';
import { HomepageComponent } from './site/homepage/homepage.component';
import { ProfileComponent } from './site/profile/profile.component';
import { ContactComponent } from './site/contact/contact.component';
import { HttpModule } from "@angular/http";

const appRoutes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'events',
        component: EventsComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsComponent,
    MenuComponent,
    HomepageComponent,
    ProfileComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
