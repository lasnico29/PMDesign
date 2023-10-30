import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProductosComponent } from './productos/productos.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ServiciosComponent } from './servicios/servicios.component';


const routes: Routes = [
  {path: '', component: LandingpageComponent},
  {path: 'productos', component: ProductosComponent },
  {path: 'cotizacion', component: CotizacionComponent },
  {path: 'inicioSesion', component: InicioSesionComponent},
  {path : 'registrarse', component: RegistrarseComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'servicios', component: ServiciosComponent}
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
  RegistrarseComponent,
  UsuarioComponent,
  CarritoComponent,
  ServiciosComponent
]
