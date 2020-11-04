import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor( private customerService: CustomerService, private router: Router) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const redirectUrl = route['_routerState']['url'];

   if (this.customerService.isLogged()) {
     return true;
   }
   this.router.navigateByUrl(
    this.router.createUrlTree(
      ['/welcompage'], {
        queryParams: {
          redirectUrl
        }
      }
    )
  );

return false;
  }
}
