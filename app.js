// GLOBAL VARIABLES
let str1="I'm Uzair Khan";
let str2="I'm a frontend Developer";
let str4= "I do coding!";
let str5= "I am a Javascript Deveoper!";
let arr=[str1,str2,str4,str5]
const spanEl= document.querySelector(".span")
// GLOBAL VARIABLES

// BLIPPER
const blipper= setInterval(() => {
    spanEl.classList.toggle("blip")
},300);
// BLIPPER











// TYPER
let k=0

function typer(arr) {
    if(k<arr.length){

        add1(arr[k])
    }
    else{
        k=0;
        typer(arr)
    }
    
}
typer(arr)

// TYPER


// STRING CONVERTER
function stringConverter(string) {
    return string.split("")
}
// STRING CONVERTER



// ADD NO 1
function add1(string) {
    let i=0;
    let forwardStr = ""
    let timer= setInterval(()=>{
        let newArray= stringConverter(string)
        forwardStr+=newArray[i]
        spanEl.innerHTML=forwardStr
        i++
        // console.log(forwardStr)
        if (i===newArray.length) {
clearInterval(timer)
            setTimeout(() => {
                
                sub1(timer,forwardStr)
            }, 2000);
        }
    },100)
}
// ADD NO 1




// SUB NO 1
function sub1(timer,forwardStr) {
    
    // clearInterval(timer)
        let newArr=stringConverter(forwardStr)
        let reverseStr=""
        let j=newArr.length;
        let reverseTimer= setInterval(() => {
            newArr.pop()
            reverseStr=newArr.join("")
            spanEl.innerHTML=reverseStr
            j--
            // console.log(reverseStr)
            if (j===0) {
                clearInterval(reverseTimer)
                console.log("done")
                k++
                typer(arr)

            }
            
    }, 100);
}
// SUB NO 1


console.log("hello")