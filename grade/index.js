const calculate = () =>{

let math = document.getElementById('math').value;
let science  = document.getElementById('science').value;
let english = document.getElementById('english').value;
let hindi  = document.getElementById('hindi').value;
let social = document.getElementById('social').value;


let result = Number(math) + Number(science) + Number(english) + Number(hindi) + Number(social);
// alert(result)
let percentage = (result/500)*100;
// alert(percentage)


document.getElementById('message').innerHTML = ` Out of 500 your total is  ${result} and percentage is ${percentage}%. <br> `;


}