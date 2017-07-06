import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NouisliderModule } from 'ng2-nouislider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FilterComponent } from './filter.component';
import { FilterBoxComponent } from './filter-box.component';
import { FilterByNameComponent } from './filter-by-name.component';
import { FilterByPriceComponent } from './filter-by-price.component';
import { FilterByStarsComponent } from './filter-by-stars.component';

@NgModule({
  bootstrap: [
    FilterComponent
  ],
  declarations: [
    FilterComponent,
    FilterBoxComponent,
    FilterByNameComponent,
    FilterByPriceComponent,
    FilterByStarsComponent
  ],
  exports: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NouisliderModule,
    ReactiveFormsModule
  ]
})
export class FilterModule {}
