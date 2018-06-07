export class Weather{
    constructor(
        public day:string,
        public humidity: number = 0,
        public highTemp : number = 0,
        public lowTemp : number = 0,
        public description : string = '',
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}

}