import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageListItemComponent } from './message-list-item/message-list-item.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageWriterComponent } from './message-writer/message-writer.component';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MessageListItemComponent, MessageListComponent, MessageWriterComponent, MessageComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MessageComponent]
})
export class MessageModule { }
