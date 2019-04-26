import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {
  menu = [{
    title: 'Castles',
    icon: 'location_city'
    },
    {
      title: 'Bridges',
      icon: 'waves'
    },
    {
      title: 'Monuments',
      icon: 'account_balance'
    },
    {
      title: 'Parks',
      icon: 'panorama'
    }];

  constructor() { }

  ngOnInit() {
  }

}
