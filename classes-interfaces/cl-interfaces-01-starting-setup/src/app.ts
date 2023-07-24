interface AddFn {
    (a: number , b : number): number;
}

interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

let addFn: AddFn;

class Person implements Greetable {
    name?: string;
    age = 30;
    
    constructor(n?:string){
        if(n){
            this.name = n;
        }
        
    }
    greet(phrase: string) {
        if(this.name){
            console.log(phrase + ' ' + this.name);
        }else{
            console.log('Hi!');
        }
        
    }
}

let user1: Greetable;

user1 = new Person();

user1.greet('Hi there');
console.log(user1);