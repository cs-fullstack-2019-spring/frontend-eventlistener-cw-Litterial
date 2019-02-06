/*Question1........................*/
var theQproblem=document.getElementById("buttonClick");  /*gets id of button*/
theQproblem.addEventListener('click',sameproblem);     /*click listener*/

function sameproblem()
{
    var escape="";  /*allows user to click again*/
    while (escape!='n') {
        escape = prompt("Please enter 'n' so you can grade the next question");

        if (escape == 'q')  /*easter egg*/
            alert("-.- Dude -.-");
        if (escape == 'n')             /*escape message*/
            alert("Who put this back on here?");
    }
}



/*Question 2.........................................*/
var clickButton=document.querySelectorAll('button');
var title=document.querySelector('header');
clickButton[1].addEventListener('click',blueBackground);   /* it reads the the Q problem button so they are set to 1 and 2 in the array*/
clickButton[2].addEventListener('click',redBackground);
function redBackground()
{
    title.classList.add("colorRed");    /*add red*/
    title.classList.remove("colorBlue")   /*remove blue*/
}
function blueBackground() {
    title.classList.add("colorBlue");  /*add blue*/
    title.classList.remove("colorRed")   /*remove red*/

}


/*Question3...................*/
var first=document.getElementById('first');    /*1st h2*/
first.addEventListener('click',fontSmall1);
var second=document.getElementById('second');   /*2nd h2*/
second.addEventListener('click',fontSmall2);
var third=document.getElementById('third');    /*3rd h2*/
third.addEventListener('click',fontSmall3);
var fourth=document.getElementById('fourth');   /*4th h2*/
fourth.addEventListener('click',fontSmall4);

/*different functions to toogle the different functions*/
function fontSmall1()
{
    first.classList.toggle("fontSmall")
}
function fontSmall2()
{
    second.classList.toggle("fontSmall")
}
function fontSmall3()
{
    third.classList.toggle("fontSmall")
}
function fontSmall4()
{
    fourth.classList.toggle("fontSmall")
}


