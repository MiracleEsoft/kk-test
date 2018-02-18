export class Greeter{
    constructor(public greeting: string)
    {
        
    }

    greet() :string 
    {
        return '<h1>' + this.greeting + '</h1>'
    }
};