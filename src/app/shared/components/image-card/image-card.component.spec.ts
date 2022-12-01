import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCardComponent } from './image-card.component';

describe('ImageListItemComponent', () => {
  let component: ImageCardComponent;
  let fixture: ComponentFixture<ImageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ImageCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
