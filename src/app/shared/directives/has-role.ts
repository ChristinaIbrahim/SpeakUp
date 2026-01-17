import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Auth } from '../../core/services/auth';

@Directive({
  selector: '[appHasRole]',
  standalone: true,
})
export class HasRole {
  constructor(

    private TemplateRef: TemplateRef<any>,
    private ViewContainerRef: ViewContainerRef,
    private authService: Auth
  ) {}

  @Input()
  set appHasRole(allowedRoles: string | string[]) {
    const userRole = this.authService.getRole();
    if (!userRole) {
      this.ViewContainerRef.clear();
      return;
    }
    const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];
    if (roles.includes(userRole)) {
      this.ViewContainerRef.createEmbeddedView(this.TemplateRef);
    } else {
      this.ViewContainerRef.clear();
    }
  }
}
