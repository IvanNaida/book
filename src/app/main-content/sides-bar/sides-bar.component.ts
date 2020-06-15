import { Component, OnInit } from '@angular/core';
import { SideChoiseService } from '../../services/side-choise.service';
@Component({
  selector: 'app-sides-bar',
  templateUrl: './sides-bar.component.html',
  styleUrls: ['./sides-bar.component.scss']
})
export class SidesBarComponent implements OnInit {

  constructor(private chooseSide: SideChoiseService ) { }

  ngOnInit() {
  }

  showFront($event){
    this.chooseSide.changeActiveSide(1)
  }
  showBack($event){
    this.chooseSide.changeActiveSide(6)
  }
  showButt($event){
    this.chooseSide.changeActiveSide(5)
  }
}
