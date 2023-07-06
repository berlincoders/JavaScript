const button = document.querySelector("#my-button");  //select the button element
const link = document.querySelector("#reset-link");    //select the button link element

button.addEventListener("click", () => {button.innerText ="Cliked!"});

button.addEventListener("click", () => {
    button.disabled = true;
    link.classList.remove("d-none")})

 link.addEventListener("click", () => {
    button.disabled = false;
    link.classList.add("d-none")
    button.innerText = "Clik me!"
              
 })
// mispelled errors , d-none,  and also the link element, it is a button( it was not clear to me, )
// the normal way for the example, is buttonlink  or something similar 
// also very important to specify the ID, mach with the HTML                                       




