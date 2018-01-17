import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Appointment } from '../../classes/appointment';
import { AppointmentService } from '../../services/appointment.service';
import { Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homedash',
  templateUrl: './homedash.component.html',
  styleUrls: ['./homedash.component.css']
})
export class HomedashComponent implements OnInit {
    private datePipe = new DatePipe('en-US');
    private _appointments = [];
    private display_appointments = [];
    private searchfield = {
        value: ""
    }
    private _user = {};
    private searched = false;
    private today = new Date(Date.now());
    private todayzero = this.today.setHours(0)
    private todaydate = this.datePipe.transform(new Date(this.todayzero), 'yyyy-MM-dd');
    private tomorrow = this.today.setHours(this.today.getHours() + 24)
    private todaytime = new Date(Date.now()).getTime();
    private todaytimeonly = this.datePipe.transform(new Date(this.todaytime), 'HH:mm')

    @Input() set appointments(newappointments){
        for(let appointment of newappointments){
            appointment.date = new Date(appointment.date)
            let _localOffset = 2*60*60000;
            let _userOffset = (appointment.date).getTimezoneOffset()*60000;
            appointment.date = new Date((appointment.date).getTime()+_localOffset+_userOffset)
        }
        this._appointments = newappointments.filter(appointment => {
            let ok = true;
            let appointmentdate = this.datePipe.transform(new Date(appointment.date), 'yyyy-MM-dd')
            if (appointment.date){
                ok = appointment.date >= this.todayzero
            }
            if(appointmentdate == this.todaydate) {
                let appointmenttime = this.datePipe.transform(new Date(appointment.time), 'HH:mm')
                ok = appointmenttime >= this.todaytimeonly
            }
            return ok
        })
        this.display_appointments = this._appointments;
        this.display_appointments.sort(function(a, b) {
            // compare dates
            if (a.date < b.date)
              return -1;
            else if (a.date > b.date)
              return 1;

            // dates were equal, try times
            if (a.time < b.time)
              return -1;
            else if (a.time > b.time)
              return 1;

            return 0;
        });
    }

    @Input() set user(newuser){
        this._user = newuser
    }

    @Output() refresh = new EventEmitter();

  constructor(private _as: AppointmentService, private _router: Router) { }

  ngOnInit() {
  }
  delete(appointmentID) {
       this._as.delete(appointmentID)
       .then(result => this.refresh.emit('update!'))
       .catch(err => console.log(err))
    }

    reset() {
      this.display_appointments = this._appointments;
      this.searched = false;
    }

  search() {
      this.searched = true;
      this.display_appointments = this._appointments.filter(appointment => {
          return (appointment.complain.toLowerCase().includes(this.searchfield.value.toLowerCase()) || appointment._username.toLowerCase().includes(this.searchfield.value.toLowerCase()))
      });
      this.searchfield = {
          value: ""
      }
    }
}
