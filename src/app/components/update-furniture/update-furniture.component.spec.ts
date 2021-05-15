import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFurnitureComponent } from './update-furniture.component';

describe('UpdateFurnitureComponent', () => {
  let component: UpdateFurnitureComponent;
  let fixture: ComponentFixture<UpdateFurnitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFurnitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
