import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DealsListComponent } from "./components/DealList/DealsList.component";
import { DealFormComponent } from "./components/DealForm/DealForm.component";

const routes: Routes = [
  {
    path: 'deals',
    component: DealsListComponent,
  },
  {
    path: 'newDeal',
    component: DealFormComponent,
  },
  {
    path: '**',
    redirectTo: 'deals',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
