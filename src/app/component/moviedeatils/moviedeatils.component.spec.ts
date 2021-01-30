import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedeatilsComponent } from './moviedeatils.component';

describe('MoviedeatilsComponent', () => {
  let component: MoviedeatilsComponent;
  let fixture: ComponentFixture<MoviedeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviedeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviedeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
