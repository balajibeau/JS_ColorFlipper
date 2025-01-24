const body = document.getElementsByTagName("body")[0];
function colorchange(para){
    body.style.backgroundColor=para;
    // console.log(para);
}

function randomcolor(){
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    body.style.backgroundColor= `rgb(${red},${blue},${green})`;
    
    const rand = document.getElementById("random");
    rand.style.backgroundColor= `rgb(${red},${blue},${green})`;

    // console.log(`rgb(${red},${blue},${green})`);
}