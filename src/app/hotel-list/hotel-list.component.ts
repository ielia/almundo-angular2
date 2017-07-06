import { Component, OnInit } from '@angular/core';
import { AvailabilityService } from '../services/availability.service';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[];

  constructor(private availabilityService: AvailabilityService) {}

  ngOnInit(): void {
    this.availabilityService.init();
    this.availabilityService.getHotels().subscribe(
      hotels => { this.hotels = hotels; },
      err => {
        console.log(err);
      }
    );
  }
}
