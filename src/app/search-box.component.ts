import { Component } from '@angular/core';

class SearchSpec {
  location: string;
  inDate: Date;
  outDate: Date;
  guests: number;
}

const SEARCH_SPEC: SearchSpec = {
  location: 'Madrid', inDate: new Date(), outDate: new Date(), guests: 2
};

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  searchSpec = SEARCH_SPEC;
}
