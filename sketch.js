var canvas;
var question;
var question,contestant;
var gameState=0;
var database;

function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);
  question = new Question(100,100);
  quiz= new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  question.display();
  quiz.display();
}
