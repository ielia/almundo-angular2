import { Component, Input, OnInit } from '@angular/core';
import { AvailabilityService } from '../../services/availability.service';

class Check {
  constructor(
    public checked: Boolean = false
  ) {}
}

@Component({
  selector: 'app-filter-by-stars',
  templateUrl: './filter-by-stars.component.html',
  styleUrls: ['./filter-by-stars.component.css']
})
export class FilterByStarsComponent implements OnInit {
  @Input() public checkboxes: Check[] = [
    new Check(), new Check(), new Check(), new Check(), new Check()
  ];
  @Input() public allChecked: Boolean;
  public starred: Number[] = [0, 0, 0, 0, 0];

  constructor(private availabilityService: AvailabilityService) {}

  public changedStar(starIndex: Number, checked: Boolean) {
    this.checkboxes[Number(starIndex)].checked = checked;
    this.updateFilter();
  }

  public getTotal() {
    return this.starred.reduce((a, s) => Number(a) + Number(s), 0);
  }

  public ngOnInit(): void {
    this.availabilityService.getStarred().subscribe(starred => { this.starred = starred; });
  }

  public toggleStars(checked: Boolean) {
    this.allChecked = checked;
    this.checkboxes.forEach(check => check.checked = this.allChecked);
    this.updateFilter();
  }

  private updateFilter() {
    const stars = this.checkboxes.map((e, i) => e.checked ? i + 1 : null).filter(e => e);
    this.availabilityService.setFilterStars(stars);
  }
}
