/* How To assign each Button their respective sound ---

There is a Higher order Function --- EventListner 

EVENT-LISTNER : Takes two parameters, first the type of input / event to be listen & Second the Event it should do when the event get detected

The task to be done is assigned to the EventListner by defining a function, So that when the Specific input is given, the eventListner will get Triggered and 
will do the respective jobs assign to it i.e will call the link function to it

How to define the function inside the Event Listner --

Function can be define explicitly or Implicitly also to the Event-Listner just like Lambda function in Python

MOSTLY ,,,, Functions are define internally only in EventListner

*/

/* 

REMEMBER: When you assign a Function Explicitly , write the function in Event-Listner without paranthesis.. Otherwise the time when JavaScript will add
            the Eventlistner line, the function will be get Called means at the starting only without any Input

Example: 

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(){
    alert("I got clicked");
}

*/

var n = document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        // How to know which button is get clicked ??
        // "this" keyword is used, which points to current function, until and unless some another function get called
        // this figure out the identity of the button that currently get called and triggered ..  Same like OOPS
        // by "this", you can modify, access the current triggered element   --- this.style.color = "white";

        // ---- We will use Switch statement for playing different sounds on different inputs

        var buttonInnerHtml = this.innerHTML;

        // Optimization : Deleted Switch from here and call the function

        makeSound(buttonInnerHtml);

        // ANIMATION :

        buttonAnimation(buttonInnerHtml);

    });

    // function will trigger when click is done on the buttons
}


// How To assign sounds to the respective keyboard buttons:

// Visit EventListner documentation on MDN and see a function for it.. 
// NOTE: Event Listner listens many things as INPUT, refer Documentation to  find 


// DETECTING Keyboard Press --------------------------------- >

document.addEventListener("keypress",function(event){
    // This will assign functions to every Keyboard buttons ... 

    // OPTIMIZATION: Instead of writing a Switch statement here also , what we can do is that we will create a separate function of switch and will 
    //              call it from both EventListner click and EventListner Keypress

    makeSound(event.key);

    // event in function can also be used in Click I/P type in place of this

    // NOTE : You can use any name in place of event i.e  e, c, ev, etc


    // ANIMATION:

    buttonAnimation(event.key);
    
});

function makeSound(key){

    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(key);
    }


}

// Adding ANIMATION to the buttons:

// The button should be flash when the key is clicked or press

function buttonAnimation(key){

    // We had Created a "pressed" class in CSS for this Animation

    var flashButton = document.querySelector("." + key);     // Selecting the class
    flashButton.classList.add("pressed");

    // ISSUE : When we clicked the key, it remain flashed only until we refresh it

    // SEARCH setTimeout in JavaScript on GOOGLE

    setTimeout(function(){
        flashButton.classList.remove("pressed");
    },130);

    // 1 sec = 1000 milliseconds

}