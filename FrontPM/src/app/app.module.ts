import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CarritoComponent } from './carrito/carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponent,
    CotizacionComponent,
    ServiciosComponent,
    InicioSesionComponent,
    RegistrarseComponent,
    UsuarioComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
