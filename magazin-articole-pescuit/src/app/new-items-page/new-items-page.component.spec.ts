import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemsPageComponent } from './new-items-page.component';

describe('NewItemsPageComponent', () => {
  let component: NewItemsPageComponent;
  let fixture: ComponentFixture<NewItemsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewItemsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewItemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
