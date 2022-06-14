let ob= {
    name: "shivam",
    profile: "student"
}
console.log(ob.name);
ob.name = "tarun";
console.log(ob.name);
let ob2= {
    name: "shivam",
    profile: "student"
}
ob=ob2;
console.log(ob.name);

function shiv(name="shiv",profile="student")
{
    console.log(`Hello ${name} so you are ${profile}?`);
    // const arr = ["shivam","delhi","125"];
    // const arr2 = ["garg","Laxmi nagar","first flr"];
    // const arr3 = arr+arr2;
    // console.log(arr3);
    // console.log(typeof(arr3));

    const ob3= {
        name: "shivam",
        profile: "student",
        password :"mein nahi bataunga kya kar lega",
    }
    const {password,...ob}= ob3; 
    console.log(ob3);
    
}
shiv();
shiv("pika");