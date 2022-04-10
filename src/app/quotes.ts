export class Quotes {
    public upvotes:number
  public downvotes:number
  public myDate:Date
 
    public showDescription: boolean;
    constructor(public name: string, public quote:string, public description:string, public completeDate: Date){
        
        this.upvotes=0
        this.downvotes=0
        this.myDate = new Date()
        this.showDescription=false;
    }
    
}
