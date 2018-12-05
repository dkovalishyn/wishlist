import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishContainerComponent } from './wish-container.component';

describe('WishContainerComponent', () => {
  let component: WishContainerComponent;
  let fixture: ComponentFixture<WishContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
