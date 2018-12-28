import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamspeakPanelComponent } from './teamspeak-panel.component';

describe('TeamspeakPanelComponent', () => {
  let component: TeamspeakPanelComponent;
  let fixture: ComponentFixture<TeamspeakPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamspeakPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamspeakPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
