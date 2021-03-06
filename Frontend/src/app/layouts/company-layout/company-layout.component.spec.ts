import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyLayoutComponent } from './company-layout.component';

describe('CompanyLayoutComponent', () => {
  let component: CompanyLayoutComponent;
  let fixture: ComponentFixture<CompanyLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
