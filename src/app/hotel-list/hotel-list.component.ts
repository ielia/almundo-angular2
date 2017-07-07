import { Component, OnInit } from '@angular/core';

import { AvailabilityService } from '../services/availability.service';

import { Hotel } from '../models/hotel';
import { OrderBy, OrderByName, OrderByPromoPrice, OrderByRegularPrice, OrderByRelevance, OrderByStars } from '../models/orderBy';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  selectedOrder: OrderBy = new OrderByRelevance();
  orderByOptions: OrderBy[] = [
    this.selectedOrder, new OrderByStars(), new OrderByPromoPrice(), new OrderByRegularPrice(), new OrderByName()
  ];
  mapOfOrderBys: Object;
  hotels: Hotel[];

  constructor(private availabilityService: AvailabilityService) {}

  ngOnInit(): void {
    this.mapOfOrderBys = this.orderByOptions.reduce((acc, ob) => { acc[ob.value] = ob; return acc; }, {});
    this.availabilityService.init();
    this.availabilityService.getHotels().subscribe(
      hotels => { this.hotels = hotels.sort(this.selectedOrder.comparator); },
      err => {
        console.log(err);
      }
    );
  }

  public setOrder(orderByOptionValue: string) {
    this.selectedOrder = this.mapOfOrderBys[orderByOptionValue];
    this.hotels.sort(this.selectedOrder.comparator);
  }
}
