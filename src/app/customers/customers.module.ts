import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './containers/customers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule, InputsModule, TableModule, IconsModule, ModalModule } from 'angular-bootstrap-md';

import * as fromCustomers from './store/customers.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CustomersEffects } from './store/customers.effects';
import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GeometriaComponent } from './calculadora/geometria/geometria.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CustomersRoutingModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule,
    InputsModule,
    IconsModule,
    TableModule,
    StoreModule.forFeature('customers', fromCustomers.customersReducer),
    EffectsModule.forFeature([CustomersEffects])
  ],
  declarations: [CustomersComponent, GeometriaComponent],
  exports: [CustomersComponent],
})
export class CustomersModule { }
