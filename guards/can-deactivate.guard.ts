import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs/Observable';


export class CanDeactivateGuard  {
  CanDeactivate(component): Observable<boolean> |  boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
