export class Weather{
    constructor(
        public humidity: number = 0,
        public highTemp : number = 0,
        public lowTemp : number = 0,
        public status : string = '',
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}

    averageTemp(){
          return ((this.highTemp+this.lowTemp)/2);
      } 
}