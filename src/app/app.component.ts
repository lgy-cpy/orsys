import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, OnDestroy {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {

  }
  private sub: Subscription;

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngDoCheck(): void {
    
  }
  ngOnInit(): void {
    this.sub = this.auth.connectedUser$
    .pipe(delay(2000))
    .subscribe(user => {
      if (user) this.router.navigate(['messages']);
    });
  }
}
