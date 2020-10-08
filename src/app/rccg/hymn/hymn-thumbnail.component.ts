import { Component, Input } from '@angular/core';
import { IHymn } from '../shared/hymn';

@Component({
  selector: 'hymn-thumbnail',
  templateUrl: "./hymn-thumbnail.component.html",
  styleUrls: ['./hymn-thumbnail.component.css']
})

export class HymnThumbnailComponent {
  @Input() hymns:IHymn[];
  @Input() grid: boolean;
}