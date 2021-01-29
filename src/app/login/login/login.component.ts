import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/services/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**credentials: Omit<User, 'id'> = {
    email:'',
    password:''
  };**/

  connection = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z]{2,}@email.com$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  public messageError = false;

  askServiceToConnect() {
    this.auth.connect(this.connection.value).subscribe(connected => this.messageError = !connected);
  }

  test(event: any) {
    console.log(event);
  }
}
