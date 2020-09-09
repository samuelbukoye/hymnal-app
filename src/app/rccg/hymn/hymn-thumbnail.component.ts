import { Component, Input } from '@angular/core';

@Component({
  selector: 'hymn-thumbnail',
  templateUrl: "./hymn-thumbnail.component.html",
  styleUrls: ['./hymn-thumbnail.component.css']
})

export class HymnThumbnailComponent {
  @Input() hymns:any[];
  @Input() grid: boolean;
}