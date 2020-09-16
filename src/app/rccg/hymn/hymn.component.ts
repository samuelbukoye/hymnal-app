import { Component } from '@angular/core';
import { HymnService } from '../shared/hymn.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hymn',
  templateUrl: "./hymn.component.html",
  styleUrls: ['./hymn.component.css']
    
})

export class HymnComponent {

hymn
constructor(
    private hymnService : HymnService,
    private route : ActivatedRoute
    ){
        this.route.params.subscribe(val=> {
        this.hymn = this.hymnService.getHymn(+val['hymn'])

      })

}
}