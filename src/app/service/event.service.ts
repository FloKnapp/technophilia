import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {NewestEvent} from "../models/newest-event";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EventService {

  constructor(private http: Http) { }

  getNewestEvent(): Observable<Response> {

    return this.http.get('https://cors-test.appspot.com/test');

  }

}
