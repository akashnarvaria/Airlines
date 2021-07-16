import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { AddShoppingItemsComponent } from './add-shopping-items.component';

describe('AddShoppingItemsComponent', () => {
  let component: AddShoppingItemsComponent;
  let fixture: ComponentFixture<AddShoppingItemsComponent>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShoppingItemsComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShoppingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call  getFlightDetails() method', () => {
    spyOn(component, 'getFlightDetails').and.callThrough();
    component.getFlightDetails();
    fixture.detectChanges();
    expect(component.getFlightDetails).toHaveBeenCalled();
  });

  it('should call  onPreview() method', () => {
    spyOn(component, 'onPreview').and.callThrough();
    component.onPreview();
    fixture.detectChanges();
    expect(component.onPreview).toHaveBeenCalled();
  });

  it('should call  addItem() method', () => {
    spyOn(component, 'addItem').and.callThrough();
    component.addItem();
    fixture.detectChanges();
    expect(component.addItem).toHaveBeenCalled();
  });
});
