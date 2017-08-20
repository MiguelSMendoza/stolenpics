import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicListComponent } from './pic-list.component';

describe('PicListComponent', () => {
  let component: PicListComponent;
  let fixture: ComponentFixture<PicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
