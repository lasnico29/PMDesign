import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProductosComponent } from './productos/productos.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';


const routes: Routes = [
  {path: 'landingpage', component: LandingpageComponent},
  {path: 'productos', component: ProductosComponent },
  {path: 'cotizacion', component: CotizacionComponent },
  {path: 'inicioSesion', component: InicioSesionComponent},
  {path : 'registrarse', component: RegistrarseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  LandingpageComponent,
  ProductosComponent,
  CotizacionComponent,
  InicioSesionComponent,
  RegistrarseComponent
]
