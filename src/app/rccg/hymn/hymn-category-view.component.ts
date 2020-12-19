import { Component, Input, OnInit } from '@angular/core';
import { faAngleDoubleDown,faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { IHymn,ICategory } from '../shared/hymn';

@Component({
  selector: 'hymn-category-view',
  templateUrl: "./hymn-category-view.component.html",
  styleUrls: [`hymn-category-view.css`]
})

export class HymnCategoryViewComponent implements OnInit {
  @Input() hymns:IHymn[];
  @Input() grid: boolean

  faAngleDoubleDown = faAngleDoubleDown
  faAngleDoubleUp = faAngleDoubleUp
  hymnCategories:ICategory[]= []
  ngOnInit(): void{
    if(this.hymns)this.hymnCategories=this.sortToCategories()
  }
  sortToCategories(){
    let CategoriesArray:ICategory[]= []
    for(let hymn of this.hymns){
      const hymnCategoryChecker=(hymnCategories:ICategory[])=>{
        return(hymnCategories.find(hymnCategory=>{
            return hymnCategory.category.toLowerCase().indexOf(hymn.category.toLowerCase()) !== -1
        }))
      }
      let index=hymnCategoryChecker(CategoriesArray)
      if (!index) {
        let categoryStructure:ICategory= { 
          category : '',
          hidden : true,
          hymns : []
        }
        categoryStructure.category=hymn.category
        categoryStructure.hymns.push(hymn)
        CategoriesArray.push(categoryStructure)
      } else {
        index.hymns.push(hymn)
      }
    }
    return CategoriesArray
  }

  toggleDivision(value){
    value.hidden=!value.hidden
  }
}