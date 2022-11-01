export class Beer{
    
    name : string;
    age : number;
    constructor (name : string, age : number) {
        this.name = name;
        this.age = age;
    }
}
let user : Beer = new Beer('Smb', 10);
console.log(user);