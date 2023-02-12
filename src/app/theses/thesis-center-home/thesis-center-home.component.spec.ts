import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesisCenterHomeComponent } from './thesis-center-home.component';

describe('ThesisCenterHomeComponent', () => {
  let component: ThesisCenterHomeComponent;
  let fixture: ComponentFixture<ThesisCenterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThesisCenterHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThesisCenterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
