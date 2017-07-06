import { Component, Input } from '@angular/core';
import { AvailabilityService } from '../../services/availability.service';

@Component({
  selector: 'app-filter-by-name',
  templateUrl: './filter-by-name.component.html',
  styleUrls: ['./filter-by-name.component.css']
})
export class FilterByNameComponent {
  @Input() public matchName: String = '';

  constructor(private availabilityService: AvailabilityService) {}

  public changedMatchName(matchName: String) {
    this.matchName = matchName;
  }

  public updateFilter() {
    this.availabilityService.setFilterName(this.matchName);
  }
}
