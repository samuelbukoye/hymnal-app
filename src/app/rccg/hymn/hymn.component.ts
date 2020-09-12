import { Component, OnInit } from '@angular/core';
import { HymnService } from '../shared/hymn.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hymn',
  templateUrl: "./hymn.component.html",
  styleUrls: ['./hymn.component.css']
    
})

export class HymnComponent implements OnInit {

hymn
constructor(
    private hymnService : HymnService,
    private route : ActivatedRoute
    ){

}
ngOnInit(){
    this.hymn = this.hymnService.getHymn(+this.route.snapshot.params['hymn'])
    
  }
}