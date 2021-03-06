import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
// import Quotes allows us to do Input property binding
import { Quotes } from '../quotes';  
import { QuotesComponent } from '../quotes/quotes.component';
import { QuotesFormComponent } from '../quotes-form/quotes-form.component';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {

  // property quotes in the QuotesDetailComponent, it will have received its data from a parent component, in our case, the QuotesComponent.
  @Input () quote: Quotes;
  @Output ()isComplete =new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  upvote(){
    this.quote.upvotes+=1
  }
  downvote(){
    this.quote.downvotes+=1
  }
  constructor() { }

  ngOnInit() {
  }

}
