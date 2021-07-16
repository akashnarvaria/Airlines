import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewPassengerComponent } from './view-passenger.component';

describe('ViewPassengerComponent', () => {
  let component: ViewPassengerComponent;
  let fixture: ComponentFixture<ViewPassengerComponent>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPassengerComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPassengerComponent);
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

  it('should call  applyFilterByPassport() method', () => {
    spyOn(component, 'applyFilterByPassport').and.callThrough();
    component.applyFilterByPassport();
    fixture.detectChanges();
    expect(component.applyFilterByPassport).toHaveBeenCalled();
  });

  it('should call  applyFilterByAddress() method', () => {
    spyOn(component, 'applyFilterByAddress').and.callThrough();
    component.applyFilterByAddress();
    fixture.detectChanges();
    expect(component.applyFilterByAddress).toHaveBeenCalled();
  });

});
