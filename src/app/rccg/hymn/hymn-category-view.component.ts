import { Component, Input, OnInit } from '@angular/core';
import { faAngleDoubleDown,faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'hymn-category-view',
  templateUrl: "./hymn-category-view.component.html",
  styleUrls: [`hymn-category-view.css`]
})

export class HymnCategoryViewComponent implements OnInit {
  @Input() hymns:any[];
  @Input() grid: boolean

  faAngleDoubleDown = faAngleDoubleDown
  faAngleDoubleUp = faAngleDoubleUp

  hymnCategories= [
    { 
      category : 'worship',
      hidden : true,
      hymns : []
    },
    {
      category : 'prayer',
      hidden : true,
      hymns : []
    },
    {
      category : 'praise',
      hidden : true,
      hymns : []
    }
  ]
  ngOnInit(): void{
    if(this.hymns)this.sortToCategories()
  }
  sortToCategories(){
    let praise = this.hymns.filter (hymn => hymn.category ==='praise')
    let prayer = this.hymns.filter (hymn => hymn.category ==='prayer')
    let worship = this.hymns.filter (hymn => hymn.category ==='worship')

    this.hymnCategories[0].hymns=worship
    this.hymnCategories[1].hymns=prayer
    this.hymnCategories[2].hymns=praise

    
  }

  toggleDivision(value){
    switch(value){
      case 'worship': this.hymnCategories[0].hidden=!this.hymnCategories[0].hidden;break
      case 'prayer': this.hymnCategories[1].hidden=!this.hymnCategories[1].hidden;break
      case 'praise': this.hymnCategories[2].hidden=!this.hymnCategories[2].hidden;break
    }
  }


}