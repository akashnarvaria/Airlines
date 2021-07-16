import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ShoppingItemsComponent } from './shopping-items.component';

describe('ShoppingItemsComponent', () => {
  let component: ShoppingItemsComponent;
  let fixture: ComponentFixture<ShoppingItemsComponent>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingItemsComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingItemsComponent);
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

  it('should call  applyFilter() method', () => {
    spyOn(component, 'applyFilter').and.callThrough();
    component.applyFilter();
    fixture.detectChanges();
    expect(component.applyFilter).toHaveBeenCalled();
  });

  it('should call  getIndex() method', () => {
    const fId=0;
    spyOn(component, 'getIndex').and.callThrough();
    component.getIndex(fId);
    fixture.detectChanges();
    expect(component.getIndex).toHaveBeenCalled();
  });

  it('should call  onDelete() method', () => {
    const index=0;
    spyOn(component, 'onDelete').and.callThrough();
    component.onDelete(index);
    fixture.detectChanges();
    expect(component.onDelete).toHaveBeenCalled();
  });

});
