console.log("Javascript Connected");

  var questions = [
  {q:"HTML stands for?",a:["Hyper Text Markup Language","Hyper Text Programming Language","Hyper Text Styling Language","Hyper Text Scripting Language"],c:"Hyper Text Markup Language"},
  {q:"Which type of JavaScript language is?",a:["Object-Oriented","Object-Based","Assembly Language","High Level"],c:"Object-Based"},
  {q:"The 'function' and 'var' are known as?",a:["Keywords","Data Types","Declaration Statements","Prototypes"],c:"Declaration Statements"},
  {q:"CSS stands for?",a:["Colorful Style Sheets","Creative Style System","Cascading Style Sheets","Computer Styling Syntax"],c:"Cascading Style Sheets"},
  {q:"Which HTML tag defines internal CSS?",a:["<style>","<css>","<script>","<design>"],c:"<style>"},
  {q:"Inside which HTML element do we put JS?",a:["<js>","<javascript>","<script>","<scripting>"],c:"<script>"},
  {q:"How to show alert box?",a:["msg('Hello')","alert('Hello')","msgBox('Hello')","prompt('Hello')"],c:"alert('Hello')"},
  {q:"Which event occurs when user clicks?",a:["onmouseclick","onchange","onclick","onmouseover"],c:"onclick"},
  {q:"Property to change background color?",a:["color","bgcolor","background-color","background"],c:"background-color"},
  {q:"Symbol for comment in JS?",a:["//","/* */","#","<!-- -->"],c:"//"}
];

var nameI=document.getElementById("inp_name");
var emailI=document.getElementById("inp_email");
var rollI=document.getElementById("inp_roll");
var instI=document.getElementById("inp-inst");

var form=document.querySelector(".formwrapper");
var start=document.querySelector(".start");
var quiz=document.querySelector(".quizbody");
var result=document.querySelector(".result");

var ques=document.getElementById("ques");
var opt=document.getElementById("opt").children;
var btn=document.querySelector(".btn3");

var i=0,correct=0;


function startQuiz(){
  if(!nameI.value||!emailI.value||!rollI.value||!instI.value){
    alert("Please fill all fields");
    return;
  }
  form.style.display="none";
  start.style.display="flex";
  document.getElementById("para-name").innerText=nameI.value;
  document.getElementById("para-email").innerText=emailI.value;
  document.getElementById("para-roll").innerText=rollI.value;
  document.querySelector(".ttlq").innerText=questions.length;
}


function loadQuestion(){
  start.style.display="none";
  quiz.style.display="flex";
  btn.style.display="none";
  var q=questions[i];
  ques.innerHTML=q.q;
  for(var x=0;x<4;x++){
    opt[x].innerText=q.a[x];
    opt[x].className="";
    opt[x].onclick=function(){selectOpt(this);};
  }
  document.querySelector(".numb").innerText=i+1;
}

function selectOpt(e){
  if(e.innerText===questions[i].c){e.className="correctAns";correct++;}
  else{
    e.className="wrongAns";
    for(var x=0;x<4;x++)
      if(opt[x].innerText===questions[i].c)opt[x].classList.add("correctAns");
  }
  for(var x=0;x<4;x++)opt[x].classList.add("disableli");
  btn.style.display="block";
}

function nextQuestion(){
  i++;
  if(i<questions.length)loadQuestion();
  else showResult();
}

function showResult(){
  quiz.style.display="none";
  result.style.display="flex";
  document.getElementById("res-name").innerText=nameI.value;
  document.getElementById("res-email").innerText=emailI.value;
  document.getElementById("res-roll").innerText=rollI.value;
  document.getElementById("res-inst").innerText=instI.value;
  var p=Math.round(correct/questions.length*100);
  document.getElementById("ttl").innerText=questions.length;
  document.getElementById("ra").innerText=correct;
  document.getElementById("wa").innerText=questions.length-correct;
  document.getElementById("perc").innerText=p;
  document.querySelector(".define").innerText=p<60?"Failed 😞 Try Again!":"Passed 🎉 Great Job!";
  var cP=document.querySelector(".circular-progress"),val=document.querySelector(".progress-value");
  var a=0,t=setInterval(function(){
    a++;val.innerText=a+"%";
    cP.style.background="conic-gradient(#4caf50 "+a*3.6+"deg,#ededed 0deg)";
    if(a>=p)clearInterval(t);
  },10);
}

function restartQuiz(){
  result.style.display="none";
  form.style.display="flex";
  i=0;correct=0;
  nameI.value=emailI.value=rollI.value=instI.value="";
}

