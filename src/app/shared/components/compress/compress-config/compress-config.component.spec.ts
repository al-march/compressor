import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompressConfigComponent } from './compress-config.component';

describe('CompressConfigComponent', () => {
  let component: CompressConfigComponent;
  let fixture: ComponentFixture<CompressConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CompressConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompressConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
