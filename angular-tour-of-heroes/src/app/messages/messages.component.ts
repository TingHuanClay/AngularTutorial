import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // the messageService property 'must be public' here for binding it in the template
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
