import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../../auth/auth-service";

export const permissionGuard: CanActivateFn = (route, state) => {
  // const auth = inject(AuthService);
  // const { screen, action } = route.data;
  // return auth.hasPermission(screen, action);
  const auth = inject(AuthService);
  const router = inject(Router);
  const path = state.url.replace('/', '');
  const perm = auth.getRoutePermission(path);
  // const { screen, action } = route.data;

  // ✅ ADMIN bypass (optional best practice)
  if (auth.hasRole('ADMIN')) {
    return true;
  }

  if (!perm) {
    router.navigate(['/unauthorized']);
    return false;
  }

  const allowed = perm.actions.every(
    (a: string) => auth.hasPermission(perm.screen, a)
  );

  if (!allowed) {
    router.navigate(['/unauthorized']);
    return false;
  }

  return true;
};
