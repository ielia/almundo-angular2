import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { HotelListComponent } from './hotel-list.component';

import { AvailabilityService } from '../services/availability.service';

@NgModule({
  bootstrap: [
    HotelListComponent
  ],
  declarations: [
    HotelListComponent
  ],
  exports: [
    HotelListComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    AvailabilityService
  ]
})
export class HotelListModule { }
