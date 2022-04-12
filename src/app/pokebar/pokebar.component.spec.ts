import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokebarComponent } from './pokebar.component';

describe('PokebarComponent', () => {
  let component: PokebarComponent;
  let fixture: ComponentFixture<PokebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
