var quiz = [
["What is Superman's real name?","Clarke Kent"],
["What is Wonderwoman's real name?","Dianna Prince"],
["What is Batman's real name?","Bruce Wayne"]
];
var score = 0 // initialize score

function play(quiz) {

    quiz.forEach(function(question, name){

   var a = prompt(question[0]);
    
   if (a === question[1]) {
       alert("You're right");
       console.log(++score);
   }
    else {
        alert("You're wrong");
        //console.log(score);
    }
})
    
alert("Your final score is " + score);

}

play(quiz);


//problem: wrong score when one answer is wrong
