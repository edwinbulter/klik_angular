import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlikAppSignInComponent } from './klik-app-sign-in.component';

describe('KlikAppSignInComponent', () => {
  let component: KlikAppSignInComponent;
  let fixture: ComponentFixture<KlikAppSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KlikAppSignInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlikAppSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
