import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoArrendarComponent } from './contacto-arrendar.component';

describe('ContactoArrendarComponent', () => {
  let component: ContactoArrendarComponent;
  let fixture: ComponentFixture<ContactoArrendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoArrendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactoArrendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
