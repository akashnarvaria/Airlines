import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PassengerDetailsComponent } from './passenger-details.component';

describe('PassengerDetailsComponent', () => {
  let component: PassengerDetailsComponent;
  let fixture: ComponentFixture<PassengerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerDetailsComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call  getPassengerDetails() method', () => {
    spyOn(component, 'getPassengerDetails').and.callThrough();
    component.getPassengerDetails();
    fixture.detectChanges();
    expect(component.getPassengerDetails).toHaveBeenCalled();
  });

  it('should call  applyFilter() method', () => {
    spyOn(component, 'applyFilter').and.callThrough();
    component.applyFilter();
    fixture.detectChanges();
    expect(component.applyFilter).toHaveBeenCalled();
  });
  it('should call  applyFilterByCheckin() method', () => {
    spyOn(component, 'applyFilterByCheckin').and.callThrough();
    component.applyFilterByCheckin();
    fixture.detectChanges();
    expect(component.applyFilterByCheckin).toHaveBeenCalled();
  });
  it('should call  applyFilterByWheelchair() method', () => {
    spyOn(component, 'applyFilterByWheelchair').and.callThrough();
    component.applyFilterByWheelchair();
    fixture.detectChanges();
    expect(component.applyFilterByWheelchair).toHaveBeenCalled();
  });

  it('should call  applyFilterByInfants() method', () => {
    spyOn(component, 'applyFilterByInfants').and.callThrough();
    component.applyFilterByInfants();
    fixture.detectChanges();
    expect(component.applyFilterByInfants).toHaveBeenCalled();
  });

  it('should call  passengerCheckinInPassenger() method', () => {
    const flightId=1;
    const seatNo="A1"
    spyOn(component, 'passengerCheckinInPassenger').and.callThrough();
    component.passengerCheckinInPassenger(flightId,seatNo);
    fixture.detectChanges();
    expect(component.passengerCheckinInPassenger).toHaveBeenCalled();
  });

  it('should call  passengerCheckinInFlight() method', () => {
    const flightId=1;
    const seatNo="A1"
    spyOn(component, 'passengerCheckinInFlight').and.callThrough();
    component.passengerCheckinInFlight(flightId,seatNo);
    fixture.detectChanges();
    expect(component.passengerCheckinInFlight).toHaveBeenCalled();
  });

  it('should call  goBack() method', () => {
    spyOn(component, 'goBack').and.callThrough();
    component.goBack();
    fixture.detectChanges();
    expect(component.goBack).toHaveBeenCalled();
  });

  it('should call  changeSeat() method', () => {
    const pId=1;
    const flightId=1;
    spyOn(component, 'changeSeat').and.callThrough();
    component.changeSeat(pId,flightId);
    fixture.detectChanges();
    expect(component.changeSeat).toHaveBeenCalled();
  });

  it('should call  changeSeatInPassenger() method', () => {
    const seatNo="A1";
    spyOn(component, 'changeSeatInPassenger').and.callThrough();
    component.changeSeatInPassenger(seatNo);
    fixture.detectChanges();
    expect(component.changeSeatInPassenger).toHaveBeenCalled();
  });

  it('should call  changeSeatInFlight() method', () => {
    const flightId=1;
    const newSeat="A1";
    const oldSeat="A1";
    const infants=true;
    const wheelchair=true;
    spyOn(component, 'changeSeatInFlight').and.callThrough();
    component.changeSeatInFlight(flightId,oldSeat,newSeat,infants,wheelchair);
    fixture.detectChanges();
    expect(component.changeSeatInFlight).toHaveBeenCalled();
  });

});
