import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongotemplateComponent } from './congotemplate.component';

describe('CongotemplateComponent', () => {
  let component: CongotemplateComponent;
  let fixture: ComponentFixture<CongotemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongotemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongotemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
