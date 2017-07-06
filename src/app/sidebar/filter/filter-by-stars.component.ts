import { Component, Input, OnInit } from '@angular/core';
import { AvailabilityService } from '../../services/availability.service';

@Component({
  selector: 'app-filter-by-stars',
  templateUrl: './filter-by-stars.component.html',
  styleUrls: ['./filter-by-stars.component.css']
})
export class FilterByStarsComponent implements OnInit {
  @Input() public checkboxes: Boolean[] = Array(5);
  @Input() public allChecked: Boolean;
  public starred: Number[] = [0, 0, 0, 0, 0];

  constructor(private availabilityService: AvailabilityService) {}

  changedStars() {
    let stars = this.checkboxes.map((e, i) => e ? i + 1 : null).filter(e => e);
    if (stars.length === 0) {
      stars = [1, 2, 3, 4, 5];
    }
    this.availabilityService.setFilterStars(stars);
  }

  getTotal() {
    return this.starred.reduce((a, s) => Number(a) + Number(s), 0);
  }

  ngOnInit(): void {
    this.availabilityService.getStarred().subscribe(starred => { this.starred = starred; });
  }

  toggleStars() {
    console.log('TOGGLE: ' + this.allChecked);
    this.checkboxes = this.checkboxes.map(c => this.allChecked);
  }
}
