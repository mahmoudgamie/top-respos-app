import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopReposListComponent } from './top-repos-list.component';

describe('TopReposListComponent', () => {
  let component: TopReposListComponent;
  let fixture: ComponentFixture<TopReposListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopReposListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopReposListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
