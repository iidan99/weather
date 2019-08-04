import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  citySelect: boolean;
  title = 'weather';

  onSelect(value:boolean){
    this.citySelect = value;
  }
}
