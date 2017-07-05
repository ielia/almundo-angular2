import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MapComponent } from './map.component';
import { SidebarComponent } from './sidebar.component';

import { FilterModule } from './filter/filter.module';

@NgModule({
  bootstrap: [
    MapComponent,
    SidebarComponent
  ],
  declarations: [
    MapComponent,
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FilterModule
  ]
})
export class SidebarModule {}
