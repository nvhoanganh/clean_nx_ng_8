import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCore from './+state/core.reducer';
import { CoreEffects } from './+state/core.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCore.CORE_FEATURE_KEY, fromCore.reducer),
    EffectsModule.forFeature([CoreEffects])
  ]
})
export class CoreModule {}
