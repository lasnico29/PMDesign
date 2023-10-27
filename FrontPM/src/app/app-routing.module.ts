import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProductosComponent } from './productos/productos.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';

const routes: Routes = [
  {path: 'landingpage', component: LandingpageComponent},
  {path: 'productos', component: ProductosComponent },
  {path: 'cotizacion', component: CotizacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  LandingpageComponent,
  ProductosComponent
]
