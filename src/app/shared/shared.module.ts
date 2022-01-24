import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BlockScrollStrategy, Overlay } from '@angular/cdk/overlay';
import { MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { FuseNavigationModule } from '@fuse/components/navigation';
import { FuseLoadingBarModule } from '@fuse/components/loading-bar';
import { FuseFullscreenModule } from '@fuse/components/fullscreen/fullscreen.module';
import { FuseCardModule } from '@fuse/components/card';
import { FuseAlertModule } from '@fuse/components/alert';
import { FuseConfirmationModule } from '@fuse/services/confirmation';
import { FuseLoadingModule } from '@fuse/services/loading';
import { FuseMediaWatcherModule } from '@fuse/services/media-watcher/media-watcher.module';
import { FuseSplashScreenModule } from '@fuse/services/splash-screen/splash-screen.module';
import { FuseUtilsModule } from '@fuse/services/utils/utils.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,

        FuseFullscreenModule,
        FuseLoadingBarModule,
        FuseNavigationModule,
        FuseCardModule,
        FuseAlertModule,
        FuseConfirmationModule,
        FuseLoadingModule,
        FuseMediaWatcherModule,
        FuseSplashScreenModule,
        FuseUtilsModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,

        FuseFullscreenModule,
        FuseLoadingBarModule,
        FuseNavigationModule,
        FuseCardModule,
        FuseAlertModule,
        FuseConfirmationModule,
        FuseLoadingModule,
        FuseMediaWatcherModule,
        FuseSplashScreenModule,
        FuseUtilsModule,
    ],
    providers   : [
        {
            provide   : MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
            useFactory: (overlay: Overlay) => (): BlockScrollStrategy => overlay.scrollStrategies.block(),
            deps      : [Overlay]
        },
        {
            // Disable 'theme' sanity check
            provide : MATERIAL_SANITY_CHECKS,
            useValue: {
                doctype: true,
                theme  : false,
                version: true
            }
        },
        {
            // Use the 'fill' appearance on Angular Material form fields by default
            provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill'
            }
        }
    ]
})
export class SharedModule {
}