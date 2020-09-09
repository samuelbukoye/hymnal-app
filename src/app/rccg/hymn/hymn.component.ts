import { Component, OnInit } from '@angular/core';
import { HymnService } from './shared/hymn.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hymn',
  templateUrl: "hymn.component.html",
  styles: [`
    .chorus{
      margin-left:20px;
    }
`]
//   styles: [`
//   header{
//     margin-left: 10px
//   }
//     main{
//       margin-top: 30px;
//       margin-left: 50px
//     }
// `]
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

  logme(text){
    console.log("hihi")
    console.log(text)
  }
  
}