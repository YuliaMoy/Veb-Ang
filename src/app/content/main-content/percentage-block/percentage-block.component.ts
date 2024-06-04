import { Component } from '@angular/core';

@Component({
  selector: 'app-percentage-block',
  templateUrl: './percentage-block.component.html',
  styleUrls: ['./percentage-block.component.css']
})
export class PercentageBlockComponent {

  changeButtonColor(event: any): void {
    event.target.style.backgroundColor = 'lightblue'; // Зміна кольору фону кнопки при натисканні
  }
}
