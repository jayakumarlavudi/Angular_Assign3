import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor(private route : Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if(confirm(`Invalid url: ${route.queryParams['returnUrl']}.
Do you want to navigate to listing view?`)) {
      this.route.navigateByUrl("students");
      return true;
    } else {
      return false;
    }
  }
}
