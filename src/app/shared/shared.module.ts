import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// CDK
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';

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
import {
	MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
	MatAutocompleteModule,
} from '@angular/material/autocomplete';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslocoModule } from '@ngneat/transloco';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatDialogModule } from '@angular/material/dialog';

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

// //pagination
// import { NgxPaginationModule } from "ngx-pagination";

// // Syncfusion ej2-angular-calendars module
// import { CalendarModule } from "@syncfusion/ej2-angular-calendars";

// import { NgSelect2Module } from "ng-select2";
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,

		// CDK
		A11yModule,
		DragDropModule,
		PortalModule,
		ScrollingModule,
		CdkStepperModule,
		CdkTableModule,
		CdkTreeModule,

		// Angular Material
		MatButtonModule,
		MatDividerModule,
		MatIconModule,
		MatMenuModule,
		MatTooltipModule,
		MatProgressSpinnerModule,
		MatFormFieldModule,
		MatInputModule,
		MatAutocompleteModule,
		MatBadgeModule,
		MatBottomSheetModule,
		MatButtonToggleModule,
		MatProgressBarModule,
		MatSidenavModule,
		MatSortModule,
		MatTableModule,
		MatTabsModule,
		TranslocoModule,
		NgApexchartsModule,
		MatCheckboxModule,
		MatDatepickerModule,
		MatRadioModule,
		MatSelectModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatToolbarModule,
		MatListModule,
		MatGridListModule,
		MatCardModule,
		MatStepperModule,
		MatExpansionModule,
		MatChipsModule,
		MatSnackBarModule,
		MatPaginatorModule,
		MatNativeDateModule,
		MatTreeModule,
		MatDialogModule,

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

		// CDK
		A11yModule,
		DragDropModule,
		PortalModule,
		ScrollingModule,
		CdkStepperModule,
		CdkTableModule,
		CdkTreeModule,

		// Angular Material
		MatButtonModule,
		MatDividerModule,
		MatIconModule,
		MatMenuModule,
		MatTooltipModule,
		MatProgressSpinnerModule,
		MatFormFieldModule,
		MatInputModule,
		MatAutocompleteModule,
		MatBadgeModule,
		MatBottomSheetModule,
		MatButtonToggleModule,
		MatProgressBarModule,
		MatSidenavModule,
		MatSortModule,
		MatTableModule,
		MatTabsModule,
		TranslocoModule,
		NgApexchartsModule,
		MatCheckboxModule,
		MatDatepickerModule,
		MatRadioModule,
		MatSelectModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatToolbarModule,
		MatListModule,
		MatGridListModule,
		MatCardModule,
		MatStepperModule,
		MatExpansionModule,
		MatChipsModule,
		MatSnackBarModule,
		MatPaginatorModule,
		MatNativeDateModule,
		MatTreeModule,

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
	providers: [
		{
			provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
			useFactory: (overlay: Overlay) => (): BlockScrollStrategy =>
				overlay.scrollStrategies.block(),
			deps: [Overlay],
		},
		{
			// Disable 'theme' sanity check
			provide: MATERIAL_SANITY_CHECKS,
			useValue: {
				doctype: true,
				theme: false,
				version: true,
			},
		},
		{
			// Use the 'fill' appearance on Angular Material form fields by default
			provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
			useValue: {
				appearance: 'fill',
			},
		},
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
