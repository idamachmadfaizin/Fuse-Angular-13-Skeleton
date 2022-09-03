import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import {
	HttpClientTestingModule,
	HttpTestingController,
} from "@angular/common/http/testing";
import { SharedModule } from "app/shared/shared.module";

import { DashboardComponent } from "./dashboard.component";

describe("DashboardComponent", () => {
	let component: DashboardComponent;
	let fixture: ComponentFixture<DashboardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DashboardComponent],
			imports: [RouterTestingModule, HttpClientTestingModule, SharedModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(DashboardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
