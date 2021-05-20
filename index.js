var readlineSync = require('readline-sync');
var chalk = require("chalk")
var userName = readlineSync.question("Please Enter Your Name ")
console.log("Welcome ", chalk.green.bold.italic (userName))
var startQuiz = readlineSync.question("\nPress Enter to Start Quiz")
console.log(chalk.underline("\n---SELECT ONLY ONE OPTION FROM THE FOLLOWING QUESTIONS ----  "))

var score = 0


function play(question,answer){

  var userAnswer = readlineSync.question(question)
  if  (userAnswer === answer){
      console.log("                 ")
      console.log("✔️ ")
      score = score +1
      console.log(chalk.green("current score incereased to ", chalk.bold(score )))
      console.log("")
  }else{
      console.log("")
      console.log("❌ ")
      score= score -1
      console.log(chalk.yellow("current score decreased to ", chalk.bold(score )))
      console.log("")
  }
}

var questions = [{

  question:"\n1. A webpage displays a picture. What tag was used to display that picture?\n\n a.picture \n b.imag \n c.img \n d.src ",
  answer:   "c"

},{

  question: "2. <b> tag makes the enclosed text bold. What is other tag to make text bold?\n\na.<strong>\nb.<dar> \nc.<black> \nd.<emp>",
  answer:"a"
},{

  question: "3. Tags and text that are not directly displayed on the page are written in _____ section.\n\na. <html>\nb. <head>\nc. <title>\nd. <body>",
  answer: "b"

},{

  question:"4. What should be the first tag in any HTML document?\n\na. <head>\nb. <title>\nc. <html>\nd. <document>",
  answer:"c"
},{

  question:"5. Which tag allows you to add a row in a table?\n\na. <td> and </td>\nb. <cr> and </cr>\nc. <th> and </th>\nd. <tr> and </tr>",
  answer:"d"
},{

  question:"6. How can you make a bulleted list?\n\na. <list>\nb. <nl>\nc. <ul>\nd. <ol>",
  answer:"c"
},{

  question:"7. How can you make a numbered list?\n\na. <dl>\nb. <ol>\nc. <list>\nd. <ul>",
  answer:"b"
},{

  question: "8. Choose the correct HTML tag to make a text italic\n\na. <ii>\nb. <italics>\nc. <italic>\nd. <i>",
  answer:"d"
},{
 
  question:"9. Choose the correct HTML tag to make a text bold?\n\na. <b>\nb. <bold>\nc. <bb>\nd. <bld>",
  answer:"a"

},{

  question:"10. Choose the correct HTML tag for the smallest size heading?\n\na. <heading>\nb. <h6>\nc. <h1>\nd. <head>",
  answer:"b"

}]

for(var i=0; i<questions.length; i++){
    var currentQuestion = questions [i]
    play(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.green.bold("Thnks for the Play.....\n&", userName, "Your Total Score is ", score))