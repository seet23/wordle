import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LosetemplateComponent } from './losetemplate.component';

describe('LosetemplateComponent', () => {
  let component: LosetemplateComponent;
  let fixture: ComponentFixture<LosetemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LosetemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LosetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
