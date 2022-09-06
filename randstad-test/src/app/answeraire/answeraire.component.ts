import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-answeraire',
  templateUrl: './answeraire.component.html',
  styleUrls: ['./answeraire.component.scss']
})
export class AnsweraireComponent implements OnInit {
  @Input() answer!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
