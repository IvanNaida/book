import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DEFAULT_BOOK_HEIGHT, DEFAULT_BOOK_WIDTH, DEFAULT_BOOK_DEPTH} from '../../constants';
@Injectable({
  providedIn: 'root'
})
export class SizeManagerService {
  sizeData = {
    x: DEFAULT_BOOK_HEIGHT,
    y: DEFAULT_BOOK_WIDTH,
    z: DEFAULT_BOOK_DEPTH,
  }
  OneStyle = new BehaviorSubject(this.sizeData);
  sideOneStyle = this.OneStyle.asObservable();
  constructor() { }
  nextMessage(data) {
    this.OneStyle.next(data)
  }
  findCoefficient(x,y){
    return y/x
  }
  changeSide(x,y,z){
    let style = {
      x: x ? x : DEFAULT_BOOK_HEIGHT,
      y: y ? y: DEFAULT_BOOK_WIDTH,
      z: z ? z : DEFAULT_BOOK_DEPTH,
    }
    this.nextMessage(style)
    return this.OneStyle
  }
  bookSize(style){
    let  element = {
      height:`${DEFAULT_BOOK_HEIGHT}px`,
      width: `${DEFAULT_BOOK_HEIGHT * this.findCoefficient(style.x, style.y)}px`,
    }
    return element
  }
  setStyleSideOne(style){
    let  element = {
      width: `${DEFAULT_BOOK_HEIGHT * this.findCoefficient(style.x, style.y)}px`,
      transform: `translate3d(${style.z/2}px, 0px, ${style.z/2}px)`
    }
    return element
  }
  setStyleSideTwo(style){
    let  element = {
      "margin-top": "-50%",
      height:`${DEFAULT_BOOK_HEIGHT * this.findCoefficient(style.x, style.y)}px`,
      width: `${style.z}px`,
      transform: `rotateY(90deg) rotateX(90deg) translate3d(0px, ${DEFAULT_BOOK_HEIGHT * this.findCoefficient(style.x, style.y)/2}px, 0px)`
    }
    return element
  }
  setStyleSideThree(style, top){
    let marg = DEFAULT_BOOK_HEIGHT + top
    let  element = {
      height:`${DEFAULT_BOOK_HEIGHT * this.findCoefficient(style.x, style.y)}px`,
      width: `${style.z}px`,
      transform: `rotateY(90deg) rotateX(90deg) translate3d(0px, ${DEFAULT_BOOK_HEIGHT * this.findCoefficient(style.x, style.y)/2}px, -${marg}px)`
    }
    return element
  }
  setStyleSideFour(style){
    let  element = {
      height:`${DEFAULT_BOOK_HEIGHT}px`,
      width: `${style.z}px`,
      transform: `rotateY(90deg) translate3d(0px, 0px, ${DEFAULT_BOOK_HEIGHT * this.findCoefficient(style.x, style.y)}px)`
    }
    return element
  }
  setStyleSideFive(style){
    let  element = {
      height: `${DEFAULT_BOOK_HEIGHT}px`,
      width: `${style.z}px`,
    }
    return element
  }
  setStyleSideSix(style){
    let  element = {
      width: `${DEFAULT_BOOK_HEIGHT * this.findCoefficient(style.x, style.y)}px`,
      transform: `rotateY(180deg) translate3d(-${style.z/2}px, 0px, ${style.z/2}px)`
    }
    return element
  }
}
