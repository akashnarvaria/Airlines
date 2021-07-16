import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FlightSeatDetailsComponent } from './flight-seat-details.component';

describe('FlightSeatDetailsComponent', () => {
  let component: FlightSeatDetailsComponent;
  let fixture: ComponentFixture<FlightSeatDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightSeatDetailsComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSeatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call  getFlightDetailsBySeats() method', () => {
    spyOn(component, 'getFlightDetailsBySeats').and.callThrough();
    component.getFlightDetailsBySeats();
    fixture.detectChanges();
    expect(component.getFlightDetailsBySeats).toHaveBeenCalled();
  });

  it('should call  tab() method', () => {
    const status="";
    spyOn(component, 'tab').and.callThrough();
    component.tab(status);
    fixture.detectChanges();
    expect(component.tab).toHaveBeenCalled();
  });

  it('should call  getPassengerDetails() method', () => {
    spyOn(component, 'getPassengerDetails').and.callThrough();
    component.getPassengerDetails();
    fixture.detectChanges();
    expect(component.getPassengerDetails).toHaveBeenCalled();
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
    const seatNo="A1"
    spyOn(component, 'passengerCheckinInFlight').and.callThrough();
    component.passengerCheckinInFlight(seatNo);
    fixture.detectChanges();
    expect(component.passengerCheckinInFlight).toHaveBeenCalled();
  });
});
