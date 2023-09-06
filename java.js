// let Abc = (name , age) => {
//     return `Hello ${name}`

// }
// console.log(Abc("aptech garden center"))
// function abc()
// {

// }
// let hello = function() {

// }

// var a = prompt ("enter any value");
// do
// {
//     document.write("hello"+"<br>");
// a++;
// }
// while(a<= 10);

// function sum(num1, num2, num3)
// {
//     let sum = 0;
//     for(i in arguments)
//     {
//         sum +=arguments[i]
//     }
//     console.log(` ${num1}`)
// }
// sum (23,23,23)


function sum2(name , ...args)
{
    let sum = 0;
    for (i in args)
    {
       sum+= args[i]
    } 
    console.log(name + sum)
}
sum2("aptech",20,30,40,10);
