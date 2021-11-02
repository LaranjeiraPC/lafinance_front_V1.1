import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuComponent } from "./menu.component";
import { MenuRoutingModule } from "./menu.routing.module";

@NgModule({
    declarations: [
        MenuComponent,
    ],
    imports: [
        BrowserModule,
        MenuRoutingModule,
        RouterModule,
        CommonModule,
        HttpClientModule,
        TabMenuModule
    ],
    exports: [MenuComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuModule { } 