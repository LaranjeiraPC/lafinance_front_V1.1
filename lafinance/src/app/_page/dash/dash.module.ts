import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashComponent } from "./dash.component";
import { DashRoutingModule } from "./dash.routing.module";
import {CardModule} from 'primeng/card';
import {TabMenuModule} from 'primeng/tabmenu';
import {ChartModule} from 'primeng/chart';
import { MessageService } from "primeng/api";
import { MessagesModule } from "primeng/messages";

@NgModule({
    declarations: [
        DashComponent,
    ],
    imports: [
        DashRoutingModule,
        RouterModule,
        CommonModule,
        HttpClientModule,
        TabMenuModule,
        CardModule,
        ChartModule,
        MessagesModule,
    ],
    exports: [],
    providers: [
        MessageService,
    ]
})
export class DashModule { } 