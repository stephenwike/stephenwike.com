import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyArtImageComponent } from './my-art-image.component';

describe('MyArtImageComponent', () => {
  let component: MyArtImageComponent;
  let fixture: ComponentFixture<MyArtImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyArtImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyArtImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
