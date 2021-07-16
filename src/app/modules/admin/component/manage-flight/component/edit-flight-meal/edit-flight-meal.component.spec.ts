import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EditFlightMealComponent } from './edit-flight-meal.component';

describe('EditFlightMealComponent', () => {
  let component: EditFlightMealComponent;
  let fixture: ComponentFixture<EditFlightMealComponent>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFlightMealComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFlightMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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

  it('should call  updatePassengerDetail() method', () => {
    const id=0;
    spyOn(component, 'updatePassengerDetail').and.callThrough();
    component.updatePassengerDetail(id);
    fixture.detectChanges();
    expect(component.updatePassengerDetail).toHaveBeenCalled();
  });

  it('should call  editMeal() method', () => {
    spyOn(component, 'editMeal').and.callThrough();
    component.editMeal();
    fixture.detectChanges();
    expect(component.editMeal).toHaveBeenCalled();
  });
});
