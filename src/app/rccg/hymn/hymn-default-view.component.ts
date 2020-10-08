import { Component, Input } from '@angular/core';
import { IHymn } from '../shared/hymn';

@Component({
  selector: 'hymn-default-view',
  templateUrl: "./hymn-default-view.component.html",
  styles: [`
    
`]
})

export class HymnDefaultViewComponent {
  @Input() hymns:IHymn[];
  @Input() grid: boolean
}