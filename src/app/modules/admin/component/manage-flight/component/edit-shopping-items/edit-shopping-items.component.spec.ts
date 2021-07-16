import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EditShoppingItemsComponent } from './edit-shopping-items.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditShoppingItemsComponent', () => {
  let component: EditShoppingItemsComponent;
  let fixture: ComponentFixture<EditShoppingItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditShoppingItemsComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShoppingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call  getFlightDetails() method', () => {
    spyOn(component, 'getFlightDetails').and.callThrough();
    component.getFlightDetails();
    fixture.detectChanges();
    expect(component.getFlightDetails).toHaveBeenCalled();
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

  it('should call  onPreview() method', () => {
    spyOn(component, 'onPreview').and.callThrough();
    component.onPreview();
    fixture.detectChanges();
    expect(component.onPreview).toHaveBeenCalled();
  });

  it('should call  editItems() method', () => {
    spyOn(component, 'editItems').and.callThrough();
    component.editItems();
    fixture.detectChanges();
    expect(component.editItems).toHaveBeenCalled();
  });
});
