import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AtivoComponent } from "./ativo.component";
 
const routes: Routes = [
    {path: '', component: AtivoComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AtivoRoutingModule { } 