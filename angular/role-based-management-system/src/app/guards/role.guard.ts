import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { RoleService } from '../services/role.service';

export const roleGuard: CanActivateFn = () => {
  const roleService = inject(RoleService);
  const router = inject(Router);

  if (roleService.getRole()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
