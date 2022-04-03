import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRedirectComponent } from './simple-redirect.component';

describe('SimpleRedirectComponent', () => {
  let component: SimpleRedirectComponent;
  let fixture: ComponentFixture<SimpleRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleRedirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
