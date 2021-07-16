import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EditInFlightShopComponent } from './edit-in-flight-shop.component';

describe('EditInFlightShopComponent', () => {
  let component: EditInFlightShopComponent;
  let fixture: ComponentFixture<EditInFlightShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInFlightShopComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInFlightShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call  getFlightShopDetails() method', () => {
    spyOn(component, 'getFlightShopDetails').and.callThrough();
    component.getFlightShopDetails();
    fixture.detectChanges();
    expect(component.getFlightShopDetails).toHaveBeenCalled();
  });

  it('should call  getPassengerShopDetails() method', () => {
    spyOn(component, 'getPassengerShopDetails').and.callThrough();
    component.getPassengerShopDetails();
    fixture.detectChanges();
    expect(component.getPassengerShopDetails).toHaveBeenCalled();
  });

  it('should call  getFlightIndex() method', () => {
    const fId=1;
    spyOn(component, 'getFlightIndex').and.callThrough();
    component.getFlightIndex(fId);
    fixture.detectChanges();
    expect(component.getFlightIndex).toHaveBeenCalled();
  });

  it('should call  getIndex() method', () => {
    const pId=1;
    spyOn(component, 'getIndex').and.callThrough();
    component.getIndex(pId);
    fixture.detectChanges();
    expect(component.getIndex).toHaveBeenCalled();
  });
});
