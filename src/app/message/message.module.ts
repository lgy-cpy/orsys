import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageListItemComponent } from './message-list-item/message-list-item.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageWriterComponent } from './message-writer/message-writer.component';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [MessageListItemComponent, MessageListComponent, MessageWriterComponent, MessageComponent],
  imports: [
    CommonModule
  ],
  exports: [MessageComponent]
})
export class MessageModule { }
