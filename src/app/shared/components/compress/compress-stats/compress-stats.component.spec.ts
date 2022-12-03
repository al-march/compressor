import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompressStatsComponent } from './compress-stats.component';

describe('CompressStatsComponent', () => {
  let component: CompressStatsComponent;
  let fixture: ComponentFixture<CompressStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CompressStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompressStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
