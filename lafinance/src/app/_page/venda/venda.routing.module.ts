import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InsertVendaComponent } from "./insert/insert-venda/insert-venda.component";
import { VendaComponent } from "./venda.component";
 
const routes: Routes = [
    {path: '', component: VendaComponent},
    {path: 'insert', component: InsertVendaComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VendaRoutingModule { } 