import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { PopinfoComponent } from './popinfo/popinfo.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent, 
    MenuComponent,
    PopinfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule 
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    PopinfoComponent
  ]
})
export class ComponentsModule { }
