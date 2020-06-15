import { Component, OnInit } from '@angular/core';
import { SizeManagerService } from '../../../services/size-manager.service'
@Component({
  selector: 'app-size-controller',
  templateUrl: './size-controller.component.html',
  styleUrls: ['./size-controller.component.scss']
})
export class SizeControllerComponent implements OnInit {
  sizeX:number;
  sizeY:number;
  sizeZ:number;
  constructor(public sizes: SizeManagerService) { }

  ngOnInit() {
  }
  saveData(){
    setTimeout(()=>{
      this.sizes.changeSide(this.sizeX,this.sizeY, this.sizeZ )
    }, 500)
  }
}
