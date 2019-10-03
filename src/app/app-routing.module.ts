import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaleComponent } from './sale/sale.component';

const routes: Routes = [
  {path: 'ventas', component: SaleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
