import { Component } from '@angular/core';

class Crumb {
  text: string;
  url: string;
}

const CRUMBS: Crumb[] = [
  { text: 'Hoteles', url: '/hoteles' },
  { text: 'Madrid', url: '' }
];

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  crumbs = CRUMBS;
}
