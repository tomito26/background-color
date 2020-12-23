let button =  document.getElementById('button');
let body = document.querySelector('body');
button.addEventListener('click',buttonClick);

body.style.backgroundColor = 'red'
let colors = ['blue','yellow','blue','orange','violet','purple','grey','khaki']




function buttonClick(e){
    let colorIndex = parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex]
    // console.log(colors[colorIndex])
}