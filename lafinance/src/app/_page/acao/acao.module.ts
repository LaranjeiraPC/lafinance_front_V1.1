import { CommonModule, CurrencyPipe, DatePipe, registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AcaoComponent } from "./acao.component";
import { AcaoRoutingModule } from "./acao.routing.module";
import { ButtonModule } from 'primeng/button';
import { InsertAcaoComponent } from "./insert/insert-acao.component";
import { TitleModule } from "src/app/_common/title/title.module";
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from "primeng/api";
import { DialogModule } from "primeng/dialog";
import localePT from '@angular/common/locales/pt';
import { SelectButtonModule } from "primeng/selectbutton";
import {DropdownModule} from 'primeng/dropdown';

registerLocaleData(localePT);

@NgModule({
    declarations: [
        AcaoComponent,
        InsertAcaoComponent
    ],
    imports: [
        AcaoRoutingModule,
        RouterModule,
        CommonModule,
        HttpClientModule,
        ButtonModule,
        TitleModule,
        InputTextModule,
        FormsModule,
        CalendarModule,
        TableModule,
        InputNumberModule,
        MessagesModule,
        MessageModule, 
        DialogModule,
        SelectButtonModule,
        DropdownModule
    ],
    exports: [CalendarModule],
    providers: [
        MessageService,
        CurrencyPipe,
        DatePipe
    ]
})
export class AcaoModule { } 