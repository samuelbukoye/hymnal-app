import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RccgGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let id =+ next.url[1].path;
      if(id<1 || id>4){
        alert('invalid hymn no!!!');
        this.route.navigate(['hymns']);
        return false
      };
      return true;
  }
  
}
