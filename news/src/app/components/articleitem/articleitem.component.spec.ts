import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleitemComponent } from './articleitem.component';

describe('ArticleitemComponent', () => {
  let component: ArticleitemComponent;
  let fixture: ComponentFixture<ArticleitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
