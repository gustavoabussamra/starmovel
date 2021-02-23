import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ChartsModule } from 'ng2-charts';
import { MenuComponent } from '../menu/menu.component';
import { WaterComponent } from '../componentes/water/water.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ChartsModule
  ],
  declarations: [Tab1Page, MenuComponent, WaterComponent],
  exports: [ChartsModule, MenuComponent, WaterComponent]
})
export class Tab1PageModule {}
