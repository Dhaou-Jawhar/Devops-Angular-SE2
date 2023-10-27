import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivFormComponent } from './univ-form.component';

describe('UnivFormComponent', () => {
  let component: UnivFormComponent;
  let fixture: ComponentFixture<UnivFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnivFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
