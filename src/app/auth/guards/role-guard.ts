import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {

  constructor(private auth: Auth, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const allowedRoles: string[] = route.data['roles'];
    const userRole = this.auth.getRole();

    if (!userRole) {
      this.router.navigate(['/login']); // المستخدم مش مسجل دخول
      return false;
    }

    if (!allowedRoles || allowedRoles.length === 0 || allowedRoles.includes(userRole)) {
      return true;
    }

    this.router.navigate(['/unauthorized']); // مش مسموح بالدخول
    return false;
  }
}
