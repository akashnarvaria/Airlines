import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EditFlightAncillaryComponent } from './edit-flight-ancillary.component';

describe('EditFlightAncillaryComponent', () => {
  let component: EditFlightAncillaryComponent;
  let fixture: ComponentFixture<EditFlightAncillaryComponent>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFlightAncillaryComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFlightAncillaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.flightDetails={
      flightid : 1
    }
  });

  it('should call  getFlightDetails() method', () => {
    spyOn(component, 'getFlightDetails').and.callThrough();
    component.getFlightDetails();
    fixture.detectChanges();
    expect(component.getFlightDetails).toHaveBeenCalled();
  });

  it('should call  getIndex() method', () => {
    const fId=0;
    spyOn(component, 'getIndex').and.callThrough();
    component.getIndex(fId);
    fixture.detectChanges();
    expect(component.getIndex).toHaveBeenCalled();
  });

  it('should call  getPassengerDetails() method', () => {
    spyOn(component, 'getPassengerDetails').and.callThrough();
    component.getPassengerDetails();
    fixture.detectChanges();
    expect(component.getPassengerDetails).toHaveBeenCalled();
  });  

  it('should call  updatePassengerDetail() method', () => {
    const id=0;
    spyOn(component, 'updatePassengerDetail').and.callThrough();
    component.updatePassengerDetail(id);
    fixture.detectChanges();
    expect(component.updatePassengerDetail).toHaveBeenCalled();
  });

  it('should call  editAncillary() method', () => {
    spyOn(component, 'editAncillary').and.callThrough();
    component.editAncillary();
    fixture.detectChanges();
    expect(component.editAncillary).toHaveBeenCalled();
  }); 
});
