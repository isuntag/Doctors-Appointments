import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomedashComponent } from './home/homedash/homedash.component';
import { AddComponent } from './add/add.component';
import { UserService } from './services/user.service';
import { AppointmentService } from './services/appointment.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HomedashComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
      UserService,
      AppointmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
