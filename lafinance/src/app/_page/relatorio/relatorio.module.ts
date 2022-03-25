import { CommonModule, CurrencyPipe, DatePipe, registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonModule } from 'primeng/button';
import { TitleModule } from "src/app/_common/title/title.module";
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from "primeng/api";
import { DialogModule } from "primeng/dialog";
import localePT from '@angular/common/locales/pt';
import { SelectButtonModule } from "primeng/selectbutton";
import { DropdownModule } from 'primeng/dropdown';
import { RelatorioRoutingModule } from "./relatorio.routing.module";
import { RelatorioComponent } from "./relatorio.component";
import { ListboxModule } from 'primeng/listbox';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';

registerLocaleData(localePT);

@NgModule({
    declarations: [
        RelatorioComponent
    ],
    imports: [
        RelatorioRoutingModule,
        RouterModule,
        CommonModule,
        HttpClientModule,
        ButtonModule,
        TitleModule,
        FormsModule,
        TableModule,
        MessagesModule,
        MessageModule,
        DialogModule,
        SelectButtonModule,
        DropdownModule,
        ListboxModule,
        PanelModule,
        FieldsetModule
    ],
    exports: [CalendarModule],
    providers: [
        MessageService,
        CurrencyPipe,
        DatePipe
    ]
})
export class RelatorioModule { } 