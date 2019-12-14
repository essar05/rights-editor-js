import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CoreEffects } from './core.effects';

describe('CoreEffects', () => {
  const actions$: Observable<any>;
  let effects: CoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CoreEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<CoreEffects>(CoreEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
