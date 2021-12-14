import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonModule } from 'primeng/button';
import { TitleModule } from "src/app/_common/title/title.module";
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from "primeng/api";
import { AtivoComponent } from "./ativo.component";
import { AtivoRoutingModule } from "./ativo.routing.module";
import {DialogModule} from 'primeng/dialog';
import {SelectButtonModule} from 'primeng/selectbutton';

@NgModule({
    declarations: [
        AtivoComponent,
    ],
    imports: [
        AtivoRoutingModule,
        RouterModule,
        CommonModule,
        HttpClientModule,
        ButtonModule,
        TitleModule,
        InputTextModule,
        FormsModule,
        TableModule,
        MessagesModule,
        MessageModule,
        DialogModule,
        SelectButtonModule
    ],
    providers: [
        MessageService,
    ]
})
export class AtivoModule { } 