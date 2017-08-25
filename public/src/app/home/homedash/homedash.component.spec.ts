import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedashComponent } from './homedash.component';

describe('HomedashComponent', () => {
  let component: HomedashComponent;
  let fixture: ComponentFixture<HomedashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomedashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
