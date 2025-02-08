// var a=10;
// function add()
// {
//     let b=20;
//     if(b>a)
//     {
//         let c=a+b
//   console.log(c);
//     }
//     console.log(b);
// }
//     add();

// let person= {
//     "name":"kle",
//     "id":"1",
//     "place":"blgm"
// }
// console.log(person[id]);

let element=document.getElementById("text")
let changetextBtn=document.getElementById("changeTextBtn")
let changeColorBtn=document.getElementById("changeColorBtn")

changetextBtn.addEventListener("click",function()
{
    element.innerHTML="Text changed using js"
})

changeColorBtn.addEventListener("click",function()
{
    document.body.style.backgroundColor="blue"
    document.body.style.backgroundColor="red"
})

