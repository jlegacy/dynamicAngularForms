import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  private dropChanged = new BehaviorSubject(null);
  announceDropChanged$ = this.dropChanged.asObservable();
  announceDropChanged(data) {
    this.dropChanged.next(data);
  }
}
