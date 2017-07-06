import { Component, OnInit } from '@angular/core';
import { AvailabilityService } from '../../services/availability.service';

@Component({
  selector: 'app-filter-by-price',
  templateUrl: './filter-by-price.component.html',
  styleUrls: ['./filter-by-price.component.css']
})
export class FilterByPriceComponent implements OnInit {
  public sliderMin: Number = 0;
  public sliderMax: Number = 1000000000;
  public sliderRange: Number[] = [0, 1];

  constructor(private availabilityService: AvailabilityService) {}

  changedRange() {
    this.availabilityService.setFilterPriceRange(this.sliderRange);
  }

  ngOnInit(): void {
    this.availabilityService.getTotalPriceRange().subscribe(priceRange => {
      this.sliderMin = priceRange.lowerBound;
      this.sliderMax = priceRange.upperBound;
      this.sliderRange = [priceRange.lowerBound, priceRange.upperBound];
    });
  }
}
