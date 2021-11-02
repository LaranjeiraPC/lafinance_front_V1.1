import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TitleComponent } from "./title.component";
import { TitleRoutingModule } from "./title.routing.module";

@NgModule({
    declarations: [
        TitleComponent,
    ],
    imports: [
        TitleRoutingModule,
        RouterModule,
        CommonModule,
        HttpClientModule,
    ],
    exports: [TitleComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TitleModule { } 