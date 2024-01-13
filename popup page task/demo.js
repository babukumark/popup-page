"use strict"
let container=document.createElement("div");
container.setAttribute("class","container");

// let subcontainer=document.createElement('div');
// subcontainer.setAttribute("class","subcontainer");



let popup=document.createElement('div');
popup.setAttribute("class","popup-page");
 
let heading=document.createElement("h2");
heading.innerText='model project';

let button=document.createElement("button");
button.innerText='Submit'



let clicked=document.createElement('div')
clicked.setAttribute("class","clicked1")

let cancel=document.createElement('h3')
cancel.setAttribute("class","icon")
cancel.innerHTML=`<i class="fa-solid fa-xmark fa-xl" style="color: #e0200b"></i>`

let headind2=document.createElement("h2")
headind2.innerText='model project'



clicked.append(cancel,headind2);
popup.append(heading,button);
// container.append(subcontainer,popup,clicked);
// container.append(popup)
document.body.append(container,popup,clicked);


// document.body.append(clicked)

button.onclick=function(){
    // subcontainer.style.display="block"

    container.style.display="block"
   
    popup.style.display="none"
    clicked.style.display="block"    
}
cancel.onclick=function(){
    // subcontainer.style.display="none"

    container.style.display="none"
    
     

    popup.style.display="block"
    clicked.style.display="none" 
    
    
}


