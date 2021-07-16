import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AddAncillaryComponent } from './add-ancillary.component';
import { NgForm } from '@angular/forms';

describe('AddAncillaryComponent', () => {
  let component: AddAncillaryComponent;
  let fixture: ComponentFixture<AddAncillaryComponent>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAncillaryComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAncillaryComponent);
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

  it('should call  getFlightIndex() method', () => {
    const fId=1;
    spyOn(component, 'getFlightIndex').and.callThrough();
    component.getFlightIndex(fId);
    fixture.detectChanges();
    expect(component.getFlightIndex).toHaveBeenCalled();
  });

  it('should call  getServiceIndex() method', () => {
    const id=1;
    spyOn(component, 'getServiceIndex').and.callThrough();
    component.getServiceIndex(id);
    fixture.detectChanges();
    expect(component.getServiceIndex).toHaveBeenCalled();
  });

  it('should call  getPassengerAncillaryDetails() method', () => {
    spyOn(component, 'getPassengerAncillaryDetails').and.callThrough();
    component.getPassengerAncillaryDetails();
    fixture.detectChanges();
    expect(component.getPassengerAncillaryDetails).toHaveBeenCalled();
  });

  it('should call  getIndex() method', () => {
    const pId=1;
    spyOn(component, 'getIndex').and.callThrough();
    component.getIndex(pId);
    fixture.detectChanges();
    expect(component.getIndex).toHaveBeenCalled();
  });

  it('should call  isInclude() method', () => {
    const ancillaryValue="true";
    spyOn(component, 'isInclude').and.callThrough();
    component.isInclude(ancillaryValue);
    fixture.detectChanges();
    expect(component.isInclude).toHaveBeenCalled();
  });

});
