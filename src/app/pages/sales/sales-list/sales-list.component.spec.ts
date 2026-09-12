import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { SalesListComponent } from './sales-list.component';
import { SaleService } from 'src/app/services/sale.service';

describe('SalesListComponent', () => {
  let component: SalesListComponent;
  let fixture: ComponentFixture<SalesListComponent>;
  let saleService: jasmine.SpyObj<SaleService>;

  beforeEach(async () => {
    saleService = jasmine.createSpyObj('SaleService', ['getSales', 'updateSale']);
    saleService.getSales.and.returnValue(of({ data: [] }));
    saleService.updateSale.and.returnValue(of({}));

    await TestBed.configureTestingModule({
      declarations: [SalesListComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [{ provide: SaleService, useValue: saleService }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(SalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should preserve delivery date and total amount when changing sale status', () => {
    const sale = {
      id: 'sale-1',
      consecutive: 'CR-001',
      customer: { id: 7, name: 'Ana Gomez', identificationNumber: '123456789' },
      saleDate: new Date('2024-01-10T00:00:00.000Z'),
      deliveryDate: '2024-01-15',
      totalAmount: 250000,
      saleStatus: { id: 1, status: 'Pendiente' },
      edit: false,
    } as any;

    component.confirmChangeStatus(sale);

    expect(saleService.updateSale).toHaveBeenCalledWith(jasmine.objectContaining({
      id: 'sale-1',
      saleStatusId: 1,
      deliveryDate: '2024-01-15',
      totalAmount: 250000,
      saleDate: jasmine.any(Date),
    }));
  });
});
