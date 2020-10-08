import { Component } from '@angular/core';
import { HymnService } from '../shared/hymn.service';
import { ActivatedRoute } from '@angular/router';
import { IHymn } from '../shared/hymn';

@Component({
  selector: 'hymn',
  templateUrl: "./hymn.component.html",
  styleUrls: ['./hymn.component.css']
    
})

export class HymnComponent {
  hymn: IHymn
  constructor(
      private hymnService : HymnService,
      private route : ActivatedRoute
      ){}
  ngOnInit(){
    this.route.params.subscribe(val=> {
      this.hymn = this.hymnService.getHymn(+val['hymn'])
    })
  }
}