import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHeroesListComponent } from './content-heroes-list.component';

describe('ContentHeroesListComponent', () => {
  let component: ContentHeroesListComponent;
  let fixture: ComponentFixture<ContentHeroesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentHeroesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHeroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
