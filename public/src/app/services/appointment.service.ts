import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppointmentService {

  constructor(private _http: Http) { }
  getAppointments() {
        return this._http.get('/api/appointments')
        .map((response: Response) => response.json())
        .toPromise()
    }
    delete(appointmentID) {
      return this._http.delete(`/api/appointments/${appointmentID}`)
      .map((response: Response) => response.json())
      .toPromise()
  }
  addAppointment(appointment) {
        return this._http.post('/api/appointments', appointment)
        .map((response: Response) => response.json())
        .toPromise()
    }
}
