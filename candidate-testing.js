const input = require('readline-sync');
//let candidateCorrectAnswers = [];

let numCorrectAnswers = 0

// TODO 2: modify your quiz app to ask 5 questions //


// TODO 1.1a: Define candidateName // 
  let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
  let question = "Who was the first American woman in space? ";
  let correctAnswer = "Sally Ride";

  let questions = ["Who was the first American woman in space?", "True or false: 5 kilometer == 5000 meters?", "(5 + 3)/2 * 10 = ?", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "What is the minimum crew size for the ISS?"];
  let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
  let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //     
  candidateName = input.question("What is your name? ");

}



  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
  let answer = input.question(`${i+1}) ${questions[i]} `);
  candidateAnswers.push(answer);
  console.log(`Your answer: ${answer} \nCorrect Answer: ${correctAnswers[i]}\n`);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
for (let i = 0; i < candidateAnswers.length; i++){
  //let candidateAnswer = candidateAnswers[i];
  //let correctAnswer = correctAnswers[i];
  if(candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
    numCorrectAnswers = numCorrectAnswers + 1
    //console.log(candidateCorrectAnswers)
  }
  

}
  //console.log(candidateCorrectAnswers.length)


  let grade = (numCorrectAnswers/(questions.length)*100);

  //let grade = (candidateCorrectAnswers.length)/(questions.length)*100);
  
  //console.log(grade);

  if (grade >= 80) {
   console.log(`>>> Overall Grade: ${grade}% (${numCorrectAnswers} out of ${questions.length} correct) <<< \n>>> Status: PASSED <<<`);
  } else {console.log(`>>> Overall Grade: ${grade}% (${numCorrectAnswers} out of ${questions.length} correct) <<< \n>>> Status: FAILED <<<`)
  }
  

  return grade;
}

//if (grade >= 80) {
   //console.log(`>>> Overall Grade: ${grade}% (${candidateCorrectAnswers.length} out of ${questions.length} correct) <<< \n>>> Status: PASSED <<<`);
  //} else {console.log(`>>> Overall Grade: ${grade}% (${candidateCorrectAnswers.length} out of ${questions.length} correct) <<< \n>>> Status: FAILED <<<`)
  //}
  

  //return grade;
//}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Candidate Name: ${candidateName}\n`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
 
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
