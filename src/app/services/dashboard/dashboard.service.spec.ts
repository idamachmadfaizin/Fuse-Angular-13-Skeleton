import { TestBed } from "@angular/core/testing";
import {
	HttpClientTestingModule,
	HttpTestingController,
} from "@angular/common/http/testing";
import {
	FormGroup,
	ReactiveFormsModule,
	FormsModule,
	FormBuilder,
} from "@angular/forms";

import { DashboardService } from "./dashboard.service";
import { SharedModule } from "app/shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("DashboardService", () => {
	let service: DashboardService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
				FormsModule,
				ReactiveFormsModule,
				SharedModule,
				BrowserAnimationsModule,
			],
		});
		service = TestBed.inject(DashboardService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
