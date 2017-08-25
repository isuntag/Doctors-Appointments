import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Appointment } from '../classes/appointment';
import { User } from '../classes/user';
import { AppointmentService } from '../services/appointment.service';
import { UserService } from '../services/user.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    private today: number = Date.now();
    private timemin = new Date("May 3, 1993 08:00:00").getHours();
    private timemax = new Date("May 3, 1993 17:00:00").getHours();
    appointment: Appointment = new Appointment();
    error = "";
    private user: User;
    constructor(private _as: AppointmentService, private _router: Router, private _us: UserService) { }

  ngOnInit() {
      this._us.checkstatus()
      .then(user => this.user = user)
      .catch(err => this._router.navigateByUrl('/login'))
  }
  onSubmit() {
      this.error = "";
      let datePipe = new DatePipe('en-US');
      let todaydate = datePipe.transform((new Date(this.today)), 'yyyy-MM-dd');
      let todaytime = new Date(Date.now()).getHours();
      let hours = this.appointment.time.split(':')[0];
      let minutes = this.appointment.time.split(':')[1];
      if(this.appointment.date == todaydate){
          if(hours < todaytime){
               this.error = "Time must be in the future.";
          }
          else if(hours < this.timemin || hours > this.timemax) {
              this.error = "Time must be between 8:00am and 5:00pm."
          }
          else{
               this.appointment._username = this.user.name;
               this.appointment._userID = this.user._id;
               hours = (Number (hours))*60;
               minutes = Number (minutes);
               this.appointment.time = hours + minutes
               this._as.addAppointment(this.appointment)
               .then(response => this._router.navigateByUrl('/'))
               .catch(error => {
                   this.error = error._body;
          });
         }
      }
      else{
         if(hours < this.timemin || hours > this.timemax){
              this.error = "Time must be between 8:00am and 5:00pm.";
         }
         else{
              this.appointment._username = this.user.name;
              this.appointment._userID = this.user._id;
              hours = (Number (hours))*60;
              minutes = Number (minutes);
              this.appointment.time = hours + minutes
              this._as.addAppointment(this.appointment)
              .then(response => this._router.navigateByUrl('/'))
              .catch(error => {
                  this.error = error._body;
         });
      }
  }}
}
