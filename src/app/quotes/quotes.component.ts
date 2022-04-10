import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[]=[
    new Quotes(1, 'Hire character.Train skill','By peter schutz', new Date(2020,10,2022)),
    
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes [index].showDescription;
  }

  deleteQuotes(isComplete, index){
    if (isComplete){
      let toDelete = confirm ('Are you sure you want to delete ${this.quotes[index].name}?')

      if (toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
  

  constructor() { }

  ngOnInit(){
  }

}
