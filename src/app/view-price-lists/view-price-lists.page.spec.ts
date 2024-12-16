import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewPriceListsPage } from './view-price-lists.page';

describe('ViewPriceListsPage', () => {
  let component: ViewPriceListsPage;
  let fixture: ComponentFixture<ViewPriceListsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewPriceListsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
