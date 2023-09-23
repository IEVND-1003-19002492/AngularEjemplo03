import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcuctoListComponent } from './procucto-list.component';

describe('ProcuctoListComponent', () => {
  let component: ProcuctoListComponent;
  let fixture: ComponentFixture<ProcuctoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcuctoListComponent]
    });
    fixture = TestBed.createComponent(ProcuctoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
