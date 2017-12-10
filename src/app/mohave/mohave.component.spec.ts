import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MohaveComponent } from './mohave.component';

describe('MohaveComponent', () => {
  let component: MohaveComponent;
  let fixture: ComponentFixture<MohaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MohaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MohaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
