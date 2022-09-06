import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'randstad-test';
  answer: string = '';
  changeAnswer(event: any){
    this.answer = event;
  }
}
