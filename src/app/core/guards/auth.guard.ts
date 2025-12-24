// // guards/auth.guard.ts
// import { CanActivateFn, Router } from '@angular/router';
// import { inject } from '@angular/core';
// import { AuthService } from '../../auth/auth-service';

// export const authGuard: CanActivateFn = () => {
//   const auth = inject(AuthService);
//   const router = inject(Router);

//   if (!auth.isLoggedIn()) {
//     router.navigate(['/login']);
//     return false;
//   }
//   return true;
// };

import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../auth/auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  // ❌ Not logged in
  if (!auth.isLoggedIn()) {
    auth.redirectUrl = state.url; // save attempted URL
    router.navigate(['/login']);
    return false;
  }

  // ✅ Logged in
  return true;

  // const auth = inject(AuthService);
  // const router = inject(Router);

  // const allowedRoles = route.data?.['roles'] as string[];

  // // Safety check
  // if (!allowedRoles || allowedRoles.length === 0) {
  //   console.warn('RoleGuard: No roles defined in route data');
  //   return true;
  // }

  // // ❌ User not logged in (extra safety)
  // if (!auth.isLoggedIn()) {
  //   auth.redirectUrl = state.url;
  //   router.navigate(['/']);
  //   return false;
  // }

  // // ❌ Role not allowed
  // if (!allowedRoles.includes(auth.user()?.role!)) {
  //   router.navigate(['/unauthorized']);
  //   return false;
  // }

  // // ✅ Role allowed
  // return true;
};
