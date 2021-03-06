import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashModule } from './_page/dash/dash.module';
import { AcaoModule } from './_page/acao/acao.module';
import { MenuModule } from './_common/menu/menu.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { AtivoModule } from './_page/ativo/ativo.module';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { VendaModule } from './_page/venda/venda.module';

registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashModule,
    AcaoModule,
    VendaModule,
    AtivoModule,
    MenuModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule,
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
