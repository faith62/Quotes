import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[]=[
    {id:1, name:'Hire character.Train skill', description:'By peter schutz'},
    
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
