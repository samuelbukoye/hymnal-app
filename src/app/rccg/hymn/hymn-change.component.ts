import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'hymn-change',
  templateUrl: "./hymn-change.component.html",
  styleUrls: [`./hymn-change.component.css`]
})

export class HymnChangeComponent {
  
  @Input() direction:string;
  faArrowLeft=faArrowLeft
  faArrowRight=faArrowRight
  isFirst:boolean
  isLast:boolean
  hymnNo:number
  
  constructor(
    private route : ActivatedRoute
    ){
      this.route.params.subscribe(val=> {
        this.hymnNo=+val['hymn']
        this.isFirst=this.hymnNo===1?true:false
        this.isLast=this.hymnNo===4?true:false
      })
    }
}