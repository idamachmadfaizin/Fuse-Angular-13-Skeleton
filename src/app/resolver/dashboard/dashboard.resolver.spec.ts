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
import { SharedModule } from "app/shared/shared.module";

import { DashboardResolver } from "./dashboard.resolver";

describe("DashboardResolver", () => {
	let resolver: DashboardResolver;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
				FormsModule,
				ReactiveFormsModule,
				SharedModule,
			],
		});
		resolver = TestBed.inject(DashboardResolver);
	});

	it("should be created", () => {
		expect(resolver).toBeTruthy();
	});
});
