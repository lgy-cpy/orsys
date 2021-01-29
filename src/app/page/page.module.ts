import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { MentionModule } from '../mention/mention.module';
import { MessageModule } from '../message/message.module';
import { PageComponent } from './page/page.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageMessagesComponent } from './page-messages/page-messages.component';
import { PageMentionsComponent } from './page-mentions/page-mentions.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PageComponent,
    PageLoginComponent,
    PageMessagesComponent,
    PageMentionsComponent,
    PageHeaderComponent,
    PageFooterComponent],
  imports: [
    CommonModule,
    LoginModule,
    MentionModule,
    MessageModule,
    RouterModule
  ],
  exports: [PageComponent, PageMentionsComponent]
})
export class PageModule { }
