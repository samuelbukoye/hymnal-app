import { Component, Input } from '@angular/core';

@Component({
  selector: 'hymn-default-view',
  templateUrl: "./hymn-default-view.component.html",
  styles: [`
    
`]
})

export class HymnDefaultViewComponent {
  @Input() hymns:any[];
  @Input() grid: boolean
}