import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelNavComponent } from './model-nav.component';

describe('ModelNavComponent', () => {
  let component: ModelNavComponent;
  let fixture: ComponentFixture<ModelNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
