import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { AuthService } from "../../auth/auth-service";

// core/directives/has-permission.directive.ts
@Directive({
  selector: '[hasPermission]',
  standalone: true
})
export class HasPermissionDirective {
  constructor(
    private tpl: TemplateRef<any>,
    private vcr: ViewContainerRef,
    private auth: AuthService
  ) { }

  @Input() set hasPermission(val: string) {
    const [screen, action] = val.split(':');
    this.vcr.clear();
    if (this.auth.hasPermission(screen, action as any)) {
      this.vcr.createEmbeddedView(this.tpl);
    }
  }
}
