import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-questionaire',
  templateUrl: './questionaire.component.html',
  styleUrls: ['./questionaire.component.scss']
})
export class QuestionaireComponent implements OnInit {
  @Output() answer = new EventEmitter<string>();
  form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      question: new FormControl(null)
    }); 
  }

  changeAnswer(value: any) {
    this.form.get('question')?.setValue(value.value);
    this.answer.emit(value.value);
  }

}
