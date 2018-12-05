import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishEditorComponent } from './wish-editor.component';

describe('AddWishComponent', () => {
  let component: WishEditorComponent;
  let fixture: ComponentFixture<WishEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
