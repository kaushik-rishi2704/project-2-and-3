function isnum(int) {
    return !isNaN(int)
}
const arr = new Array();
let str='';
let num1=0
let num2=0
const number = document.querySelectorAll('.btn')
const display= document.querySelector(".display span")

let count = 0
// console.log(number)
number.forEach(pressed => {
    pressed.addEventListener('click', e => {
        const btn = e.currentTarget.textContent
        if (btn!='=' && btn!='C') {
            str=str+btn
            
            display.textContent=str
            
        }
        if (btn=="C") {
            display.textContent=0;
            str=''  
            
        }
        if (btn=="=") {
            str=eval(str)
            display.textContent=str;
        }

    })
});


