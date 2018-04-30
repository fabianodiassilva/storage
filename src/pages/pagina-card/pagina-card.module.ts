import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaCardPage } from './pagina-card';

@NgModule({
  declarations: [
    PaginaCardPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaCardPage),
  ],
})
export class PaginaCardPageModule {}
