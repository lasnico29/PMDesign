import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatIconRegistry } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule
  ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('materialicons', 'Material Icons');
  }

}
