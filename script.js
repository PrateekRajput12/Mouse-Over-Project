const ypos =document.querySelector("#ypos-value")
const xpos =document.querySelector("#xpos-value")


window.addEventListener("mouseover",()=>{
    console.log(event);
    const xclient= event.clientX
    const yclient= event.clientY
    xpos.textContent=  xclient
    ypos.textContent=  yclient

})