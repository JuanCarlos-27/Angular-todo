import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabWrapperComponent } from './tab-wrapper.component';

describe('TabWrapperComponent', () => {
  let component: TabWrapperComponent;
  let fixture: ComponentFixture<TabWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabWrapperComponent]
    });
    fixture = TestBed.createComponent(TabWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
