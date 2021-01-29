import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentionComponent } from './mention/mention/mention.component';
import { PageLoginComponent } from './page/page-login/page-login.component';
import { PageMentionsComponent } from './page/page-mentions/page-mentions.component';
import { PageMessagesComponent } from './page/page-messages/page-messages.component';
import { MessageGuard } from './services/message.guard';

const routes: Routes = [
  {
    path:'messages',
    component: PageMessagesComponent
  },
  {
    path:'mentions',
    component: PageMentionsComponent//,
    // canActivate: [MessageGuard]
  },
  {
    path:'',
    component: PageLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
