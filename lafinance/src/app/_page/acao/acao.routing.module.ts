import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AcaoComponent } from "./acao.component";
import { InsertAcaoComponent } from "./insert/insert-acao.component";
 
const routes: Routes = [
    {path: '', component: AcaoComponent},
    {path: 'insert', component: InsertAcaoComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AcaoRoutingModule { } 