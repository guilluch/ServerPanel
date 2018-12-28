import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorioPanelComponent } from './factorio-panel.component';

describe('FactorioPanelComponent', () => {
  let component: FactorioPanelComponent;
  let fixture: ComponentFixture<FactorioPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactorioPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorioPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
