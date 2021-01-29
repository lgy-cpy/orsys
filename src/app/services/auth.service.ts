import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }
 /**constructor(private http: HttpClient) {
    console.time('HTTP');
    http.get(environment.RESOURCE_MESSAGES).subscribe(data => {
      console.timeEnd('HTTP');
      console.groupCollapsed('Réponse serveur');
      console.table(data);
      console.groupEnd();
    });
  }**/

  public connectedUser: User | null = null;
  // tous ce qui souscript sera au courant du dernier message
  public connectedUser$ = new BehaviorSubject(this.connectedUser);

  /**
   * CallBack
   * Event
   * Promise
   * Observable qu'Angular utilise le plus souvent
   * @param credentials 
   */
  connect(credentials: Omit<User, 'id'>): Observable<boolean> {
    const API = environment.RESOURCE_USERS;
    const { email, password } = credentials;
    const URL = `${API}?email=${ email }&password=${ password }`;
    return this.http.get<User[]>(URL).pipe(tap(console.log), map(users => {
      /**if (0 === users.length) {
        return false;
      } else {
        this.connectedUser = users[0];
        return true;  
      }**/
      const valid = (users.length)? true : false;
      if (valid) {
        this.connectedUser = users[0];
        this.connectedUser$.next(this.connectedUser);
      }
      return valid;
    }))
    // returnof(true);
  }
}
