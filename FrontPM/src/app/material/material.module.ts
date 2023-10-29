import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule

]

@NgModule({
  declarations: [],
  imports: [
    MaterialComponents
  ],

  exports: [MaterialComponents]
})
export class MaterialModule { }
