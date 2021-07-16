import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddPassengerComponent } from './add-passenger.component';

describe('AddPassengerComponent', () => {
  let component: AddPassengerComponent;
  let fixture: ComponentFixture<AddPassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPassengerComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call  getFlightDetails() method', () => {
    spyOn(component, 'getFlightDetails').and.callThrough();
    component.getFlightDetails();
    fixture.detectChanges();
    expect(component.getFlightDetails).toHaveBeenCalled();
  });

  it('should call  getPassengerDetails() method', () => {
    spyOn(component, 'getPassengerDetails').and.callThrough();
    component.getPassengerDetails();
    fixture.detectChanges();
    expect(component.getPassengerDetails).toHaveBeenCalled();
  });

  it('should call  getIndex() method', () => {
    const pId=0;
    spyOn(component, 'getIndex').and.callThrough();
    component.getIndex(pId);
    fixture.detectChanges();
    expect(component.getIndex).toHaveBeenCalled();
  });

  it('should call  addPassengerToFlight() method', () => {
    spyOn(component, 'addPassengerToFlight').and.callThrough();
    component.addPassengerToFlight();
    fixture.detectChanges();
    expect(component.addPassengerToFlight).toHaveBeenCalled();
  });

  it('should call  addPassengerDetails() method', () => {
    spyOn(component, 'addPassengerDetails').and.callThrough();
    component.addPassengerDetails();
    fixture.detectChanges();
    expect(component.addPassengerDetails).toHaveBeenCalled();
  });

  it('should call  onChange() method', () => {
    spyOn(component, 'onChange').and.callThrough();
    component.onChange();
    fixture.detectChanges();
    expect(component.onChange).toHaveBeenCalled();
  });

});
