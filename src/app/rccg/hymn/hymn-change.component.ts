import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HymnService } from '../shared/hymn.service';
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
  length:number
  isFirst:boolean
  isLast:boolean
  hymnNo:number
  
  constructor(
    private route : ActivatedRoute,
    private hymnService : HymnService
    ){}

    ngOnInit(){
      this.length = this.hymnService.getLength()
      this.route.params.subscribe(val=> {
        this.hymnNo=+val['hymn']
        this.isFirst=this.hymnNo===1?true:false
        this.isLast=this.hymnNo===this.length?true:false
      })
  }
}