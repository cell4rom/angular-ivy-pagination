import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsPaginationComponent } from './rs-pagination.component';

describe('RsPaginationComponent', () => {
  let component: RsPaginationComponent;
  let fixture: ComponentFixture<RsPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
