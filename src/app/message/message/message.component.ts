import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(
    public msg: MessageService
  ) {}

  ngOnInit(): void {
    this.msg.getMessages();
  }

  requestMessageCreation(text: string) {
    console.log(text);
    this.msg.sendMessage({
      text: text,
      userId: 1
    });
  }
}
