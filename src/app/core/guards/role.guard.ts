// guards/role.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../auth/auth-service';

export const roleGuard: CanActivateFn = (route) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const allowedRoles = route.data['roles'] as string[];

  // If route doesn't care about roles → allow
  if (!allowedRoles || allowedRoles.length === 0) {
    return true;
  }

  if (!auth.hasAnyRole(allowedRoles)) {
    router.navigate(['/unauthorized']);
    return false;
  }
  return true;
};
