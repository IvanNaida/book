import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideChoiseService {
  activeSide: number = 1;
  bookElement;
  active = new BehaviorSubject(this.activeSide);
  sideOneStyle = this.active.asObservable();
  constructor() { }
  nextMessage(side) {
    this.active.next(side);
  }
  changeActiveSide(side:number){
    this.activeSide = side;
    this.nextMessage(side);
  };
}
