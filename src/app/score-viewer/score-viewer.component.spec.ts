import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreViewerComponent } from './score-viewer.component';

describe('ScoreViewerComponent', () => {
  let component: ScoreViewerComponent;
  let fixture: ComponentFixture<ScoreViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
