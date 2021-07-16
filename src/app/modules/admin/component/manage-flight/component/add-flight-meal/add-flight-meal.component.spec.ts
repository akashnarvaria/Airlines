import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AddFlightMealComponent } from './add-flight-meal.component';

describe('AddFlightMealComponent', () => {
  let component: AddFlightMealComponent;
  let fixture: ComponentFixture<AddFlightMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlightMealComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlightMealComponent);
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

  it('should call  addMealDetails() method', () => {
    spyOn(component, 'addMealDetails').and.callThrough();
    component.addMealDetails();
    fixture.detectChanges();
    expect(component.addMealDetails).toHaveBeenCalled();
  });

});
