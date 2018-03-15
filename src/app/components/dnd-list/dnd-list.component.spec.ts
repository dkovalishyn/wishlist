import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndListComponent } from './dnd-list.component';

describe('DndListComponent', () => {
  let component: DndListComponent;
  let fixture: ComponentFixture<DndListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
