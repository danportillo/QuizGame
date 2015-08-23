//questions and answers withe the right answer on index 0
var question = [
"What is the meaning of oeuvre?", 
"What does 'trompe l'oeil' mean?", 
"What is a kiln?",
"What is lithography",
"What is the meaning of 'abstract'?",
"What does 'chiaroscuro' mean?"
]

var answer = [
["An artist's lifetime body of work", "Egg tempera", "An opera scene"],
["Deceive the eye", "Throw oil", "Painting with oil"],
["An oven for making pottery", "A type of Russian garment", "Another word for quilt"],
["A printmaking technique where a stone or metal plate is used","A tool used by cavemen to write on stone", "A big rock"],
["Existing in thought but not in physical existence", "A summary", "To remove paint from the canvas"],
["The interplay of light and shadow on a surface", "The color saturation on an object", "A type of Brazilian Barbeque"]



]

//define the functions
//write questions and answers
function printQues(q1){
	var output = document.getElementById("questionDiv");
	output.innerHTML = q1;
}
function printAns1(a1){
	var output = document.getElementById("ans1");
	output.innerHTML = a1;
}
function printAns2(a1){
	var output = document.getElementById("ans2");
	output.innerHTML = a1;
}
function printAns3(a1){
	var output = document.getElementById("ans3");
	output.innerHTML = a1;
}

// compare choice to the right answer
function compareAns() {
	//if user selected right answer or clicks the right answer twice
	if(document.getElementById("ans1").innerHTML == answer[cntr][0] || document.getElementById("ans1").innerHTML == "right!!!"){
		//inform answered correctly
		document.getElementById("ans1").innerHTML = "right!!!";
		//Keep track of question number
		cntr=cntr+1;
		//Generate next question from counter variable
		//Start next question in one second, enough time to re-read answer and other possible answers
		setTimeout(game	, 1000, cntr);

	}
	else{
		document.getElementById("ans1").innerHTML = "you are wrong!!!";
		cntr=cntr+1;
		setTimeout(function(){ console.log("Hello"); }, 1000);
		setTimeout(game	, 1000, cntr);
} }

function compareAns2() {
	if(document.getElementById("ans2").innerHTML == answer[cntr][0] || document.getElementById("ans2").innerHTML == "right!!!"){
		document.getElementById("ans2").innerHTML = "right!!!";
		cntr=cntr+1;
		setTimeout(function(){ console.log("Hello"); }, 1000);
		setTimeout(game	, 1000, cntr);
	}
	else{
		document.getElementById("ans2").innerHTML = "you are wrong!!!";
		cntr=cntr+1;
		setTimeout(function(){ console.log("Hello"); }, 1000);
		setTimeout(game	, 1000, cntr);
}}

function compareAns3() {
	if(document.getElementById("ans3").innerHTML == answer[cntr][0] || document.getElementById("ans3").innerHTML == "right!!!"){
		document.getElementById("ans3").innerHTML = "right!!!";
		cntr=cntr+1;
		setTimeout(function(){ console.log("Hello"); }, 1000);
		setTimeout(game	, 1000, cntr);
	}
	else{
		document.getElementById("ans3").innerHTML = "you are wrong!!!";
		cntr=cntr+1;
		setTimeout(function(){ console.log("Hello"); }, 1000);
		setTimeout(game	, 1000, cntr);
		}
}


//define the game function
function game(cntr){

if (qnum>5){
	alert("finished!");
	window.location.assign("http://www.danportillo.com");
	return;
}

	//create 3 positions at random
var num1 = 0;
var num2 = 0;
var num3 = 0;
var place = Math.floor(Math.random()*3);
num1 = place;
while (num2 === 0 || num2 === num1){
	var place = Math.floor(Math.random()*3);
	num2 = place;
}
num3 = 3-(num1+num2);
//render 3 positions at random

printQues(question[cntr]);
printAns1(answer[cntr][num1]);
printAns2(answer[cntr][num2]);
printAns3(answer[cntr][num3]);
qnum=qnum+1;
document.getElementById("qnumber").innerHTML = "Question "+qnum;

//accept user input and then start game again with next question
	document.getElementById("ans1").addEventListener("click", compareAns);
	document.getElementById("ans2").addEventListener("click", compareAns2);
	document.getElementById("ans3").addEventListener("click", compareAns3);

}
var qnum = 0;
var cntr = 0;
game(cntr, qnum);



	






















