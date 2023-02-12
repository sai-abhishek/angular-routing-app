import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  CanMatchFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../auth-service/auth.service';

export const authGuard: CanMatchFn | CanActivateFn | CanActivateChildFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn) return true;

  return router.navigate(['/login', { returnUrl: state.url }]);
};
