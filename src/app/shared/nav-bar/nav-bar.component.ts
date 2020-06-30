import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isCollapsed = true;

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    console.log(this.isCollapsed);
  }
}
