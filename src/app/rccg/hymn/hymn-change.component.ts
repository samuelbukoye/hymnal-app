import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'hymn-change',
  templateUrl: "./hymn-change.component.html",
  styleUrls: [`./hymn-change.component.css`]
})

export class HymnChangeComponent implements OnInit{
  
  @Input() direction:string;
  faArrowLeft=faArrowLeft
  faArrowRight=faArrowRight
  isFirst:boolean
  isLast:boolean
    
  hymnNo=+this.route.snapshot.params['hymn']
  
  constructor(
    private route : ActivatedRoute
    ){}
    ngOnInit(){
      this.isFirst=this.hymnNo===1?true:false
      this.isLast=this.hymnNo===4?true:false
    }
}