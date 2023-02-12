import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesisCenterComponent } from './thesis-center.component';

describe('ThesisCenterComponent', () => {
  let component: ThesisCenterComponent;
  let fixture: ComponentFixture<ThesisCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThesisCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThesisCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
