import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
  </div>
  <div>
    Marvellous Infosystems : <input type="text">
  </div>`,
  styles: ['input{color:"Blue"}']
})
export class AppComponent {
  title = 'Angular Text Field App with CSS effect';
}
