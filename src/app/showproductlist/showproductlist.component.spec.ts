import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowproductlistComponent } from './showproductlist.component';

describe('ShowproductlistComponent', () => {
  let component: ShowproductlistComponent;
  let fixture: ComponentFixture<ShowproductlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowproductlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowproductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
