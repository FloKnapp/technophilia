import { Component, OnInit } from '@angular/core';
import { EventService } from '../../service/event.service';
import {NewestEvent} from "../../models/newest-event";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

}
