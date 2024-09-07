var colortext = document.getElementById("color");
var text = document.getElementById("text_present");
var colw = document.getElementById("count");
var author = document.getElementById("name_user");
var nameproject = document.getElementById("name_project");
var examples = document.getElementById("examples");
var prompt = document.getElementById("prompt");
var start = document.getElementById("button-start")

let time = 0
let count = 0;

colortext.value = '#FFFFFF'
author.textContent = `${author.value}`
nameproject.textContent = `${nameproject.value}`
console.log(colortext.value);

function toggleexamples() {
    if(examples.value==1) {
        console.log(1)
    };
    if(examples.value==2) {
        console.log(2)
    }
    if(examples.value==3) {
        console.log(3)
    }
    if(examples.value==4) {
        console.log(4)
    }
    if(examples.value==5) {
        console.log(5)
    }
    if(examples.value==6) {
        console.log(6)
    }
    if(examples.value==7) {
        console.log(7)
    }
    if(examples.value==8) {
        console.log(8)
    }
    if(examples.value==9) {
        console.log(9)
    }
}

function textcolor() {
    text.style.color = colortext.value
}

text.addEventListener("input", textcolor);
examples.addEventListener("select", toggleexamples);

localStorage.setItem("UserName", `${author.textContent}`);
localStorage.setItem("NameProject", `${nameproject.textContent}`);
localStorage.setItem("Color", colortext.value)
localStorage.setItem("examples", examples.value)