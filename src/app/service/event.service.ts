import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class EventService {

  response: Response;

  constructor(private http: Http) { }

  getNewestEvent() {
    return this
        .http
        .get('https://cors-test.appspot.com/test')
        .subscribe(
          response => this.response = response
    );
  }

}
