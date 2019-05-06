import {Component, OnInit} from '@angular/core';
import {LocationTypesService} from "../services/location-types.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {

  type;
  properList;

  constructor(
    private locationTypesService: LocationTypesService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.type = params.get('type').toString();
      console.warn(this.type);
    });
    this.check();
  }

  check() {
    this.locationTypesService.getPage(this.type);
    this.locationTypesService.sendDataType();
    this.properList = this.locationTypesService.properList;
  }
}
