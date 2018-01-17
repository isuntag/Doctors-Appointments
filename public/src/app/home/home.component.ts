import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AppointmentService } from '../services/appointment.service';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { User } from '../classes/user';
import { Appointment } from '../classes/appointment';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private user: User;
    private appointments: Array<Appointment> = [];
    constructor(private _us: UserService, private _as: AppointmentService, private _router: Router) { }

    ngOnInit() {
        this._us.checkstatus()
        .then(user => this.user = user)
        .catch(err => this._router.navigateByUrl('/login'));

        this._as.getAppointments()
        .then(appointments => {
            this.appointments = appointments;
            for(let appointment of this.appointments){
                let newtime = new Date("May 3, 1993 00:00:00")
                newtime.setMinutes(appointment.time);
                appointment.time = newtime;
            }
        })
        .catch(err => console.log(err));
    }
    logout() {
        this._us.logout()
        .then(response => this._router.navigateByUrl('/login'))
    }
    refresh(eventData){
        this._as.getAppointments()
        .then(appointments => {
            this.appointments = appointments;
            for(let appointment of this.appointments){
                let newtime = new Date("May 3, 1993 00:00:00")
                newtime.setMinutes(appointment.time);
                appointment.time = newtime;
            }
        })
        .catch(err => console.log(err));
    }
}
