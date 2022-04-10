import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quotes[]=[
    {id:1, name:'Hire character.Train skill'},
    {id:2, name:'Hire character.Train skill'}
  ];
  
 
}
