import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdbComponent } from './cmdb.component';

describe('CmdbComponent', () => {
  let component: CmdbComponent;
  let fixture: ComponentFixture<CmdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmdbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
