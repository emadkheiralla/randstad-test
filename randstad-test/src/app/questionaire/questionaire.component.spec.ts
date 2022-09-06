import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { QuestionaireComponent } from './questionaire.component';

describe('QuestionaireComponent', () => {
  let component: QuestionaireComponent;
  let fixture: ComponentFixture<QuestionaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change radio btn with fakeAsync', fakeAsync(() => {
    let buttonElement = fixture.debugElement.query(By.css('.my-radio-btn'));
      
    spyOn(component, 'changeAnswer');
    spyOn(component.answer, 'emit');

    //Trigger click event after spyOn
    buttonElement.triggerEventHandler('change', 'Red');
    tick();
    expect(component.changeAnswer).toHaveBeenCalledWith('Red');
    expect(component.form.valid).toBeTruthy();
    fixture.detectChanges();
    // expect(component.answer.emit).toHaveBeenCalled();
  }));

});
