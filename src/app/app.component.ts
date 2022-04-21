import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  show = false;
  parentValue = 'App component'

  inputHandler(value: any) {
    this.parentValue = value
  }

  duplicate() {
    this.parentValue = this.parentValue;
  }
}
