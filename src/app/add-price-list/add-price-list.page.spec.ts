import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPriceListPage } from './add-price-list.page';

describe('AddPriceListPage', () => {
  let component: AddPriceListPage;
  let fixture: ComponentFixture<AddPriceListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddPriceListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
