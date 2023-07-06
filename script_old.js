// you can run the code with node, from the terminal typing:
//  node script.js 
// please check that you are in the correct directory otherwiswe
// you will have an error like this one:
//
// node:internal/modules/cjs/loader:1078
// throw err;
//
// this is just a simple example to display the data type
//console.log (typeof(42));

// create an Object very important the coma
//const musician = {
//    firstname:"john",
//    lastname:"lennon"
//};

//Read and change an Object
// Read

//change
//musician.firstname="Ringo"
//console.log(musician.firstname);

// Variable let or const
//let sum=0;
// sum can be re- assigned
//const firstname= "john";
// firstname can not be re-assigned

// lets concantenate two strings

//const firstString="Hello";
//const secondString="world";

//const bouthStrigns= firstString +" " + secondString;
//console.log(bouthStrigns);
// Conditions 
//if , else" if, else
//const nombre = "Benjamin";
//if (nombre.startsWith("B") )
 //      {
 //        console.log(true);
 //       }
//else   {
 //        console.log(false);
//}        
//loop and iterations
//for loop
//for (i=1 ; i<=10 ; i++ )
//               { 
//                 console.log(i);
//               };
//
//  Iterations Over an Array
//const names=["Benjamin","Arthur","Lucien","Alex"];
//
//names.forEach((teacher)=>{
//    if (teacher.startsWith("B") )
//   {
//      console.log(true);
//     }
//else   {
//      console.log(false);
//}    
//})
// Functions
//Arrow Functions
// lets write a function to capitalized a name
//Adding Tabnine Extension at this position, to reconiconize the javascript syntax
 //const capitalized = (name1)=>{
 //   const firstLetter= name1[0].toUpperCase();
 //   const restOfwords= name1.substring(1).toLowerCase();  
 //   const fullName= firstLetter + restOfwords;
 //   return fullName;

 //}
// console.log(capitalized("bEnJAmIn"));
 
 
 //DOM 
 //Select and element from the DOM
 // document.querySelector("CSS_Selector");
 // Html tag => p
 // class => .red
 // id => #myId
 
// go to https://perdu.com/
//select the h1, and save it to a variable
// now that you selected the h1, you can call the header function
// and it will display the header
//const header = document.querySelector("h1");

//change an element
//element.classlist.add("red"); if you want to add a class to an element
//element.classlist.remove("red"); if you want to remove a class from an element
//element.classlist.toggle("red"); if you want to toggle a class from an element
//element.innertext = "new text"; if you want to change the text of an element
//or with innerHTML you can add some html code to the text element
//element.style.display = "block"; if you want to change the display of an element

//Exercise
// now that you selected the h1, you can modify the text of the h1
// remember that <em> is a tag that can be used for emphasized text
// The content inside is typically displayed in italic.
//header.innerHTML = "<em>lost on the internet</em>";

// change the color of the h1
//header.style.color = "Purple";

//Event handling
//wait for an event to happen!

//blur event, the oposite of focus event
//click event, 
//focus event,
//keyUP event,
//scroll event,
//submit event, usually used to submit a form
//touchstart event, usually used to start a touch event in movile devices
//lisen for an event to happen!
// document.addEventListener(EVENT_TYPLE,CALLBACK)
//document.addEventListener("click", (event)=>{
//  console.log("cliked"); }
//);
// Mdm Event , google it to find a list of events
// chatGPT
// as a child of the container top, 
// please draw a triangle, that can change background  color when i move the mose over it

//console log hellow worl
//console.log("hello world");

//  lewagon exxercise +++
//Your turn
//Now that we know some of the ways we can use JavaScript to modify our elements, let’s put it into practice with a challenge.

//Below, we’ve given you some HTML with a button that has the text “Change my text”, as well as a link that says “Hide me”.
// Using JavaScript, we want to change the text of the button to “Click me!” and hide the link from the page.
//Let’s get started by:

// 1 )first defining a variable using const button and then using document.querySelector to select the button element from the DOM.
// Hint: you can use the button’s id using "#my-button".
//then define another variable using const link and again using document.querySelector to select the link element from the DOM. 
//Hint: you can use the links’s id using "#hide-link".
//add two console.log’s to check your two variables and make sure you don’t have any errors.
//then, let’s use our button variable to change the text to say “Click me!” by using the method .innerText.
//finally, let’s use our link variable to add the class d-none to it in order to hide it. (We’ve already defined the d-none class for you in the CSS panel).

// write your code below
const button = document.querySelector("#my-button");  //select the button element
const link = document.querySelector("#hide-link");    //select the link element

button.addEventListener("click", ()=>{
                                      button.innerText = "Click me"
   
                                         });

  
//link.classList.add("d-none");                       // add the class d-none to the link (deleted in the CSS panel)
//console.log("list");                               // display the list

