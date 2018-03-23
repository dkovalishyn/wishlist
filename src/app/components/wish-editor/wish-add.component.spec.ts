import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishAddComponent } from './wish-add.component';

describe('WishAddComponent', () => {
  let component: WishAddComponent;
  let fixture: ComponentFixture<WishAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
