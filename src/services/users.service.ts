import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

users = [
  {name:"john",class:10,age:22,school:"abc"},
  {name:"sam",class:9,age:32,school:"local"},
  {name:"jack",class:8,age:11,school:"jackschool"},
  {name:"honey",class:7,age:90,school:"jack22school"}
]

alertChannel: Subject<any> = new Subject();
alertChatMentionSubscribe$ = this.alertChannel.asObservable();
chatStream(data: any) {
  console.log(data,",")
  this.alertChannel.next(this.users[0]);
}
getMemberChatStream(): Observable<any> {
  return this.alertChatMentionSubscribe$;
}

}
