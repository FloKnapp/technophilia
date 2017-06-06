import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestEventComponent } from './newest-event.component';

describe('NewestEventComponent', () => {
  let component: NewestEventComponent;
  let fixture: ComponentFixture<NewestEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
