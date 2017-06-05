import { Component, OnInit } from '@angular/core';
import { EventService } from '../../service/event.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [EventService]
})
export class HomepageComponent implements OnInit {

  constructor(private eventService: EventService) {
    this.eventService = eventService
  }

  ngOnInit() {

    this.eventService.getNewestEvent();

  }

}
