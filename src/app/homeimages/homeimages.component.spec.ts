import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeimagesComponent } from './homeimages.component';

describe('HomeimagesComponent', () => {
  let component: HomeimagesComponent;
  let fixture: ComponentFixture<HomeimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeimagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
