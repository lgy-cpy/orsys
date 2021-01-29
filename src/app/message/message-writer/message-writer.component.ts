import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message-writer',
  templateUrl: './message-writer.component.html',
  styleUrls: ['./message-writer.component.css']
})
export class MessageWriterComponent implements OnInit {

  userText = '';
  @Output() text$ = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

 // @HostListener('window:keyup.Enter')
  @HostListener('keyup.Enter')
  sendText() {
    this.text$.emit(this.userText);
  }
}
