import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyArtFilterComponent } from './my-art-filter.component';

describe('MyArtFilterComponent', () => {
  let component: MyArtFilterComponent;
  let fixture: ComponentFixture<MyArtFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyArtFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyArtFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
