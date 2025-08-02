import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button class="text-black w-full  px-8 px-2 rounded-xl shadow-md hover:bg" (click)="btnClicked.emit() ">
      {{ label() }}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  label = input('');
  btnClicked = output();
}
