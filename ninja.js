quiz = {
"name" : "Super Hero Name Quiz",
"description": "How many superheroes can you name?",
"question": "What is the real name of ",
"questions": [
{"questions": "Superman", "answer" : "Clarke Kent" },
{"questions": "Batman", "answer" : "Bruce Wayne" },
{"questions": "WonderWoman", "answer" : "Dianna Prince" },
]	
}

var score = 0 // initialize score
play(quiz);

function play(quiz){
// main game loop
for(var i=0, question, answer, max=quiz.questions; i<max; i++) {
question = quiz.questions[i].question; //referencing object properties
answer = ask(question);
check(answer);
}
// end of main game loop
gameOver();
    
    
function ask(question) {
return prompt(quiz.question + question); //changed to reference object properties
}
    
function check(answer) {
if(answer === quiz.questions[i].answer){ //changed to reference object properties
alert("Correct!");
// increase score by 1
score++;
} else {
alert("Wrong!");
}
}
 
function gameOver(){
// inform the player that the game has finished and tell them how many points they have scored
alert("Game Over, you scored " + score + " points");
}
}    
