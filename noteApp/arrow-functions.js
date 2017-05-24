var square = x=>x*x;
console.log(square(5));


var user = {
    name: "Gilbert",
    sayHi: ()=>{
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt(){
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};


user.sayHi();
user.sayHiAlt();


user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);