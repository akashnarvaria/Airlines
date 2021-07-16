import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ChangeMealComponent } from './change-meal.component';
import { FormsModule } from '@angular/forms';

describe('ChangeMealComponent', () => {
  let component: ChangeMealComponent;
  let fixture: ComponentFixture<ChangeMealComponent>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeMealComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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

  it('should call  getMealIndex() method', () => {
    const id=1;
    spyOn(component, 'getMealIndex').and.callThrough();
    component.getMealIndex(id);
    fixture.detectChanges();
    expect(component.getMealIndex).toHaveBeenCalled();
  });

  it('should call  getIndex() method', () => {
    const pId=1;
    spyOn(component, 'getIndex').and.callThrough();
    component.getIndex(pId);
    fixture.detectChanges();
    expect(component.getIndex).toHaveBeenCalled();
  });

  it('should call  isInclude() method', () => {
    const meal="";
    spyOn(component, 'isInclude').and.callThrough();
    component.isInclude(meal);
    fixture.detectChanges();
    expect(component.isInclude).toHaveBeenCalled();
  });

  it('should call  mealChangeFlight() method', () => {
    const flightId=1;
    const seatNo="A1";
    spyOn(component, 'mealChangeFlight').and.callThrough();
    component.mealChangeFlight(flightId,seatNo);
    fixture.detectChanges();
    expect(component.mealChangeFlight).toHaveBeenCalled();
  });




});
