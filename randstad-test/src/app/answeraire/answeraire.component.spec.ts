import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsweraireComponent } from './answeraire.component';

describe('AnsweraireComponent', () => {
  let component: AnsweraireComponent;
  let fixture: ComponentFixture<AnsweraireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnsweraireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnsweraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
