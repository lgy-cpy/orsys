import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Message } from './interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  messages$: BehaviorSubject<Message[]> = new BehaviorSubject([]);

  getMessages(): void {
      this.http.get<Message[]>(environment.RESOURCE_MESSAGES)
      .subscribe(messages => this.messages$.next(messages));
  }
  sendMessage(message: Omit<Message, 'id'>): void /* TODO */ {
    this.http.post<Message>(environment.RESOURCE_MESSAGES, message)
    .subscribe(() => this.getMessages());
  }
}
