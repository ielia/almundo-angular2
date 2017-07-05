import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FilterComponent } from './filter.component';
import { FilterBoxComponent } from './filter-box.component';
import { FilterByNameComponent } from './filter-by-name.component';

@NgModule({
  bootstrap: [
    FilterComponent
  ],
  declarations: [
    FilterComponent,
    FilterBoxComponent,
    FilterByNameComponent
  ],
  exports: [
    FilterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FilterModule {}
