import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { LatestNewsFeedComponent } from './components/latest-news-feed/latest-news-feed.component';
import { HomeSmallDeviceComponent } from './components/home-small-device/home-small-device.component';
import { LatestNewsFeedSmallDeviceComponent } from './components/latest-news-feed-small-device/latest-news-feed-small-device.component';
import { NavSmallDevicesComponent } from './components/nav-small-devices/nav-small-devices.component';
import { HomePageComponent } from './components/home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    LatestNewsFeedComponent,
    HomeSmallDeviceComponent,
    LatestNewsFeedSmallDeviceComponent,
    NavSmallDevicesComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
