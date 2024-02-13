 //Understanding inheritance
 //super method:->when we use constructor in child class we can have to use the Super method
 class user1 {

    name : string;
    email : String;
    age: number;

constructor (name: string , email: string , age:number){
    this.name =name;
    this.email = email;
    this.age = age;
}

}

class Admin extends user1 {
    isAdmin: boolean = true;
    userreporting:number;
    constructor(name:string , email:string , age:number , userreporting:number){
           super(name , email , age);
           this.userreporting = userreporting;
    }

}

const u1: user1 = new user1 ("qqq" , "qqq@gmail" , 77);
const ad : Admin = new Admin ("qqq" , "qqq@gmail" , 77 ,9);

console.log(u1);
console.log(ad);