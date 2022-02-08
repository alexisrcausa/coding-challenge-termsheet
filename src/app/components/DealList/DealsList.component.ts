import { Component, OnInit } from '@angular/core';
import { DealsService } from "../../services/DealsService";
import { IDeal } from "../../interfaces/IDeal.interface";

@Component({
  selector: 'deals-list',
  templateUrl: './DealsList.component.html',
  styleUrls: ['./DealsList.component.scss']
})
export class DealsListComponent implements OnInit {

  deals: IDeal[] = [];

  constructor(private DealsService: DealsService) {}

  ngOnInit() {
    this.getAllDeals();
  }

  getAllDeals() {
    this.deals = this.DealsService.getAllDeals();
  }
}
