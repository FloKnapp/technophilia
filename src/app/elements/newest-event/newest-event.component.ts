import { Component, OnInit } from '@angular/core';
import {EventService} from "../../service/event.service";

@Component({
  selector: 'app-newest-event',
  templateUrl: './newest-event.component.html',
  styleUrls: ['./newest-event.component.css'],
  providers: [EventService]
})
export class NewestEventComponent implements OnInit {

  private eventService: EventService;

  public response;

  constructor(eventService: EventService) {
    this.eventService = eventService;
  }

  ngOnInit() {

    this.eventService.getNewestEvent().subscribe(
        response => this.response = response.json().status
    );

  }

}
