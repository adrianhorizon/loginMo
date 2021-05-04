import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LinksEffects } from './store/effects/links.effects';
import { LinksReducer } from './store/reducers/links.reducers';
import { LinksService } from 'app/services/links.service';

@NgModule({
    imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('links', LinksReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([LinksEffects])
    ],
    providers: [
        LinksService
    ]
})
export class ReduxModule { }
