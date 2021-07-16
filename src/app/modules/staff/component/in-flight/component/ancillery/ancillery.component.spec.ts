import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { AncilleryComponent } from './ancillery.component';

describe('AncilleryComponent', () => {
  let component: AncilleryComponent;
  let fixture: ComponentFixture<AncilleryComponent>;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AncilleryComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AncilleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call  getIndex() method', () => {
    const pId=1;
    spyOn(component, 'getIndex').and.callThrough();
    component.getIndex(pId);
    fixture.detectChanges();
    expect(component.getIndex).toHaveBeenCalled();
  });

  it('should call  getPassengerDetails() method', () => {
    spyOn(component, 'getPassengerDetails').and.callThrough();
    component.getPassengerDetails();
    fixture.detectChanges();
    expect(component.getPassengerDetails).toHaveBeenCalled();
  });
});
