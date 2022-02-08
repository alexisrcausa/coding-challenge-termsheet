import { Component, OnInit } from '@angular/core';
import { DealsService } from "../../services/DealsService";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'deals-form',
  templateUrl: './DealForm.component.html',
  styleUrls: ['./DealForm.component.scss']
})
export class DealFormComponent implements OnInit {

  dealForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required),
    purchasePrice: new FormControl(null, Validators.required),
    NOI: new FormControl(null, Validators.required),
    capRate: new FormControl(null, Validators.required),
  })

  constructor(
    private DealsService: DealsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dealForm.get('purchasePrice')?.valueChanges.subscribe(() => this.calculateCapRate())
    this.dealForm.get('NOI')?.valueChanges.subscribe(() => this.calculateCapRate())
  }

  private calculateCapRate() {
    const purchasePrice = this.dealForm.get('purchasePrice')?.value
    const NOI = this.dealForm.get('NOI')?.value;

    if(purchasePrice && NOI) {
      this.dealForm.controls['capRate'].setValue((NOI/purchasePrice).toFixed(4))
    }
  }

  addDeal() {
    this.DealsService.addNewDeal(this.dealForm.value)
    this.router.navigateByUrl('/')
  }

}
