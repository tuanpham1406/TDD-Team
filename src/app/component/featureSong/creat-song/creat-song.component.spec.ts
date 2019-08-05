import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatSongComponent } from './creat-song.component';

describe('CreatSongComponent', () => {
  let component: CreatSongComponent;
  let fixture: ComponentFixture<CreatSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
