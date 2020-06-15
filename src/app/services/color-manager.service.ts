import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ColorManagerService {
frontBG = {
  red: 128,
  green: 128,
  blue: 128
}
backBG = {
  red: 128,
  green: 128,
  blue: 128
}
buttBG = {
  red: 128,
  green: 128,
  blue: 128
}

  frontBGStyle = new BehaviorSubject(this.frontBG);
  sideOneStyle = this.frontBGStyle.asObservable();

  backBGStyle = new BehaviorSubject(this.backBG);
  sideSixStyle = this.backBGStyle.asObservable();

  buttBGStyle = new BehaviorSubject(this.buttBG);
  sideFiveStyle = this.buttBGStyle.asObservable();

  constructor() { }

  nextMessageOne(data) {
    this.frontBGStyle.next(data)
  }
  nextMessageFive(data) {
    this.buttBGStyle.next(data)
  }
  nextMessageSix(data) {
    this.backBGStyle.next(data)
  }
  setFrontBG(red: number, green: number, blue: number){
    this.frontBG.red = red
    this.frontBG.blue = blue
    this.frontBG.green = green
    this.nextMessageOne(this.frontBG)
  }
  setBackBG(red: number, green: number, blue: number){
    this.backBG.red = red
    this.backBG.blue = blue
    this.backBG.green = green
    this.nextMessageSix(this.backBG)
  }
  setButtBG(red: number, green: number, blue: number){
    this.buttBG.red = red
    this.buttBG.blue = blue
    this.buttBG.green = green
    this.nextMessageFive(this.buttBG)
  }
  setBgFront(color: any, element: any){
    element.style.backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`
  }
  setBgBack(color: any, element: any){
    element.style.backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`
  }
  setBgButt(color: any, element: any){
    element.style.backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`
  }
}
