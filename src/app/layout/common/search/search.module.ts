import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "app/shared/shared.module";
import { SearchComponent } from "app/layout/common/search/search.component";

@NgModule({
	declarations: [SearchComponent],
	imports: [RouterModule.forChild([]), SharedModule],
	exports: [SearchComponent],
})
export class SearchModule {}
