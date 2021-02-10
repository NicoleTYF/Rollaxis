import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPswdComponent } from './login-pswd.component';

describe('LoginPswdComponent', () => {
  let component: LoginPswdComponent;
  let fixture: ComponentFixture<LoginPswdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPswdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
