import { Injectable } from "@angular/core";
import { IDeal } from "../interfaces/IDeal.interface";

@Injectable({
  providedIn: 'root'
})
export class DealsService {

  private deals: IDeal[] = [
    {
      id: 0,
      name: 'Big House - South',
      address: 'Magic Street 222',
      NOI: 222,
      purchasePrice: 222222.22,
      capRate: 21,
    },
    {
      id: 1,
      name: 'Big House - South',
      address: 'Magic Street 222',
      NOI: 222,
      purchasePrice: 1111111.2,
      capRate: 0.0002,
    }
  ];

  constructor() {}

  getAllDeals():IDeal[] {
    return this.deals;
  }

  addNewDeal(deal: IDeal) {
    this.deals.push({ ...deal, id: this.deals.length + 1 });
  }

}
