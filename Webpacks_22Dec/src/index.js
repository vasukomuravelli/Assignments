import ("./index.css");

let button = document.getElementById("button");

button.onclick = ()=>{
    printNotes();
}
let logo = document.querySelector(".logo");

logo.innerHTML = `<img src = "./images/notepad.png"/>`;

let screen = document.getElementById("screen");

let inputNote = document.getElementById("input");

function printNotes(){

    screen.innerHTML = null;

    let p = document.createElement('p');

    p.classList.add("output");

    p.innerText = inputNote.value;

    screen.append(p);

}