import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHeroDetailComponent } from './content-hero-detail.component';

describe('ContentHeroDetailComponent', () => {
  let component: ContentHeroDetailComponent;
  let fixture: ComponentFixture<ContentHeroDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentHeroDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
