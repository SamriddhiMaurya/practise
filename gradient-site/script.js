let btn1 = document.getElementById('myButton'); 
let btn2 = document.getElementById('myButton2'); 
let copyCode = document.querySelector(".copyCode");
let rgb1, rgb2; 

const getHexValues = () => {
 let myHexValue = '0123456789abcdef';
    let colors ="#"
    for (i = 0; i < 6; i++){
        colors= colors + myHexValue[Math.floor(Math.random()*16)]; 
    }
    return colors;
}

const handleButton1 = () => {
    rgb1 = getHexValues();   
    btn1.innerText=`${rgb1}`
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, #444)`;
    copyCode.innerHTML = `background-image : linear-gradient(to right, ${rgb1}, ${rgb2})`;
}
const handleButton2 = () => {
    rgb2 = getHexValues();
     btn2.innerText = `${rgb2}`;
        document.body.style.backgroundImage = `linear-gradient(to right, #000, ${rgb2})`;
        copyCode.innerHTML = `background-image : linear-gradient(to right, ${rgb1}, ${rgb2})`;
};
btn1.addEventListener('click', handleButton1);
btn2.addEventListener("click", handleButton2);



 