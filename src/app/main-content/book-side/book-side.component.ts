import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, from } from 'rxjs';
import { skipUntil, takeUntil } from 'rxjs/operators';
import { SizeManagerService } from '../../services/size-manager.service';
import { ColorManagerService } from '../../services/color-manager.service';
import { SideChoiseService } from '../../services/side-choise.service';
@Component({
  selector: 'app-book-side',
  templateUrl: './book-side.component.html',
  styleUrls: ['./book-side.component.scss']
})
export class BookSideComponent implements OnInit {
  rotateAngle = {
    transform:'',
    height: '',
    width: ''
  };
  positionX: number = 10100;
  positionY: number = 10100;
  mouseX: number;
  mouseY: number;
  sub: any;
  mousedown$;
  mouseup$;
  sideOneStyle;
  sideTwoStyle;
  sideThreeStyle;
  sideFourStyle;
  sideFiveStyle;
  sideSixStyle;
  bookStyle;
  observer;

  @ViewChild('book', {static: true}) book: ElementRef;

  constructor( private sizes: SizeManagerService, private color: ColorManagerService, private chooseService: SideChoiseService) { }

  ngOnInit() {
    this.chooseService.bookElement = this.book
    let top;
    this.sizes.OneStyle.subscribe(e=> {
      this.sideOneStyle = this.sizes.setStyleSideOne(e)
      this.sideTwoStyle = this.sizes.setStyleSideTwo(e)
      this.sideFourStyle = this.sizes.setStyleSideFour(e)
      this.sideFiveStyle = this.sizes.setStyleSideFive(e)
      this.sideSixStyle = this.sizes.setStyleSideSix(e)
      const {height, width} = this.sizes.bookSize(e)
      this.rotateAngle.width =width
      this.rotateAngle.height = height
      this.observer = new MutationObserver(mutations => {
        top = mutations[0].target
        top = top.offsetTop
        this.sideThreeStyle = this.sizes.setStyleSideThree(e, top)
      });
      let config = { attributes: true };
      this.observer.observe(this.book.nativeElement.children[0].children.side2, config);
      })

    this.mousedown$ = fromEvent(this.book.nativeElement, 'mousedown');
    this.mouseup$ = fromEvent(this.book.nativeElement, 'mouseup');
    this.mouseup$.subscribe(_ => {
      this.register();
    })
    this.mousedown$.subscribe(e=> {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
    this.register();
  }

  register() {
    try {
      if(this.sub){
        this.sub.unsubscribe();
      }
    } catch (err) {
        console.log(err)
    }finally{}

    let mousemove$ = fromEvent(this.book.nativeElement, 'mousemove');
    mousemove$ = mousemove$.pipe(skipUntil(this.mousedown$));
    mousemove$ = mousemove$.pipe(takeUntil(this.mouseup$));
    this.sub = mousemove$.subscribe((e: any) => {
      console.log(e.clientY)
      this.rotateAngle.transform = `rotateX(-${this.positionY+ (e.clientY - this.mouseY)}deg) rotateY(${this.positionX+ (e.clientX - this.mouseX)}deg)`
    })
  }
}
