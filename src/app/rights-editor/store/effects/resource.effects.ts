import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ResourceActions, ResourceActionTypes } from '../actions/resource.actions';


@Injectable()
export class ResourceEffects {


  @Effect()
  loadResources$ = this.actions$.pipe(
    ofType(ResourceActionTypes.LoadResources),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<ResourceActions>) {
  }

}
