
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ErrorComponent } from "./error.component";
import { ErrorRoutes } from "./error.routing";

@NgModule({
    declarations: [ErrorComponent],
    imports: [RouterModule.forChild(ErrorRoutes)],
})
export class ErrorModule {}