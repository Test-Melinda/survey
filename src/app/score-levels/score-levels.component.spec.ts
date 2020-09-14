import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreLevelsComponent } from './score-levels.component';

describe('ScoreLevelsComponent', () => {
  let component: ScoreLevelsComponent;
  let fixture: ComponentFixture<ScoreLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreLevelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
