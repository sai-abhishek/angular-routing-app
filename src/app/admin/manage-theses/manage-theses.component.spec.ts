import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageThesesComponent } from './manage-theses.component';

describe('ManageThesesComponent', () => {
  let component: ManageThesesComponent;
  let fixture: ComponentFixture<ManageThesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageThesesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageThesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
