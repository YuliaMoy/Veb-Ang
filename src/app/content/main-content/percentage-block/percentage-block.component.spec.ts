import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageBlockComponent } from './percentage-block.component';

describe('PercentageBlockComponent', () => {
  let component: PercentageBlockComponent;
  let fixture: ComponentFixture<PercentageBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentageBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PercentageBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
