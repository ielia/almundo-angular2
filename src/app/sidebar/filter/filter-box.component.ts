import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.css']
})
export class FilterBoxComponent {
  @Input() classPrefix = '';
  @Input() title = '';
  public visibleBody = true;

  onToggleBody() {
    this.visibleBody = !this.visibleBody;
  }
}
