import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlikAppComponent } from './klik-app.component';

describe('KlikAppComponent', () => {
  let component: KlikAppComponent;
  let fixture: ComponentFixture<KlikAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KlikAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlikAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
