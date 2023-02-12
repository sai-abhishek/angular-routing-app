import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivateFn,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ThesisDetailComponent } from './theses/thesis-detail/thesis-detail.component';

export const canDeactivateGuard: CanDeactivateFn<ThesisDetailComponent> = (
  component: ThesisDetailComponent,
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | boolean => {
  console.log(route.paramMap.get('id'));

  console.log(state.url);

  // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
  if (!component.thesis || component.thesis.name === 'component.editName') {
    return true;
  }
  // Otherwise ask the user with the dialog service and return its
  // observable which resolves to true or false when the user decides
  return component.dialogService.confirm('Discard changes?');
};
