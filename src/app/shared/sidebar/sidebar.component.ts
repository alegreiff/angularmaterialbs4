import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output()
  cierraMenuLateral = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  onClose(){
    console.log('CLOSED')
    this.cierraMenuLateral.emit();
  }
}
