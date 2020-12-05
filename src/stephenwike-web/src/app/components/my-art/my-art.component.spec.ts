import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyArtComponent } from './my-art.component';

describe('MyArtComponent', () => {
  let component: MyArtComponent;
  let fixture: ComponentFixture<MyArtComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
