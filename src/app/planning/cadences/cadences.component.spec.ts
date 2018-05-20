import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadencesComponent } from './cadences.component';

describe('CadencesComponent', () => {
  let component: CadencesComponent;
  let fixture: ComponentFixture<CadencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
