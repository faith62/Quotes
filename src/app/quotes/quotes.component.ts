import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[]=[
    new Quotes('Faith Chemutai', 'Hire character.Train skill','By peter schutz', new Date(2020,10,2022)),
    
  ]
  preNum:number
  lastNum:number
  counter:number

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes [index].showDescription;
  }

  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm ('Are you sure you want to delete ${this.quotes[index].quote}?')

      if (toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }


  highestUpvote(){
    this.preNum =0
    this.lastNum=0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  
  }
  
  

  constructor() { }

  ngOnInit(){
  }

}
