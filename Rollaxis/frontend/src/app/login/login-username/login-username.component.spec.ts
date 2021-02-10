import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUNComponent } from './login-username.component';

describe('LoginUNComponent', () => {
  let component: LoginUNComponent;
  let fixture: ComponentFixture<LoginUNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
