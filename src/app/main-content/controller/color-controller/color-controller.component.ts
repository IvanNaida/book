import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { ColorManagerService } from '../../../services/color-manager.service';
import { SideChoiseService } from '../../../services/side-choise.service';

@Component({
  selector: 'app-color-controller',
  templateUrl: './color-controller.component.html',
  styleUrls: ['./color-controller.component.scss']
})
export class ColorControllerComponent implements OnInit {
  redColor:number = 128;
  greenColor:number = 128;
  blueColor:number = 128;
  subscription;
  @ViewChild('red', {static: true}) red: ElementRef;
  @ViewChild('green', {static: true}) green: ElementRef;
  @ViewChild('blue', {static: true}) blue: ElementRef;
  constructor( private colorManager: ColorManagerService, private sideChoose: SideChoiseService) { }

  ngOnInit() {
    this.sideChoose.active.subscribe(side=>{
      if(side === 1){
        this.red.nativeElement.value = this.colorManager.frontBG.red
        this.green.nativeElement.value = this.colorManager.frontBG.green
        this.blue.nativeElement.value = this.colorManager.frontBG.blue
        this.redColor = this.colorManager.frontBG.red
        this.greenColor = this.colorManager.frontBG.green
        this.blueColor = this.colorManager.frontBG.blue
      }
      if(side === 5){
        this.red.nativeElement.value = this.colorManager.buttBG.red
        this.green.nativeElement.value = this.colorManager.buttBG.green
        this.blue.nativeElement.value = this.colorManager.buttBG.blue
        this.redColor = this.colorManager.buttBG.red
        this.greenColor = this.colorManager.buttBG.green
        this.blueColor = this.colorManager.buttBG.blue
      }
      if(side === 6){
        this.red.nativeElement.value = this.colorManager.backBG.red
        this.green.nativeElement.value = this.colorManager.backBG.green
        this.blue.nativeElement.value = this.colorManager.backBG.blue
        this.redColor = this.colorManager.backBG.red
        this.greenColor = this.colorManager.backBG.green
        this.blueColor = this.colorManager.backBG.blue
      }
    })
  }

  activateColorController(){
    if(this.sideChoose.activeSide === 1){
      console.log(this.sideChoose.activeSide)
      this.subscription =  this.colorManager.frontBGStyle.subscribe(color=>{
          this.colorManager.setBgFront(color, this.sideChoose.bookElement.nativeElement.children[0].children.side1 )
        }
      )
    }
    if(this.sideChoose.activeSide === 5){
      console.log(this.sideChoose.activeSide)
      this.subscription = this.colorManager.buttBGStyle.subscribe(color=>{
        this.colorManager.setBgButt(color, this.sideChoose.bookElement.nativeElement.children[0].children.side5 )
      })
    }
    if(this.sideChoose.activeSide === 6){
      console.log(this.sideChoose.activeSide)
      this.subscription = this.colorManager.backBGStyle.subscribe(color=>{
        this.colorManager.setBgBack(color, this.sideChoose.bookElement.nativeElement.children[0].children.side6 )
      })
    }
  }
  deactivateColorController(){
    this.subscription.unsubscribe()
  }

  Color($event){
    if(this.sideChoose.activeSide === 1){
      this.colorManager.setFrontBG(this.redColor, this.greenColor, this.blueColor)
    }
    if(this.sideChoose.activeSide === 5){
      this.colorManager.setButtBG(this.redColor, this.greenColor, this.blueColor)
    }
    if(this.sideChoose.activeSide === 6){
      this.colorManager.setBackBG(this.redColor, this.greenColor, this.blueColor)
    }
  }
}
