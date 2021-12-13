

//  const paraGraph = ["ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. ",
//                     "Today, most of the websites are built using MVC (model view controller) architecture. In MVC architecture, React is the 'V' which stands for view, whereas the architecture is provided by the Redux or Flux.",
//                     "AWS stands for Amazon Web Services which uses distributed IT infrastructure to provide different IT resources on demand.",
//                     "Machine learning is a growing technology which enables computers to learn automatically from past data.",
//                     "Git is a modern and widely used distributed version control system in the world."

// ]; 


const paraGraph = [
"The main objective of ReactJS is to develop User Interfaces (UI) that improves the speed of the apps. It uses virtual DOM (JavaScript object), which improves the performance of the app. The JavaScript virtual DOM is faster than the regular DOM. We can use ReactJS on the client and server-side as well as with other frameworks. It uses component and data patterns that improve readability and helps to maintain larger apps.",
"TypeScript is an open-source pure object-oriented programing language. It is a strongly typed superset of JavaScript which compiles to plain JavaScript. It contains all elements of the JavaScript. It is a language designed for large-scale JavaScript application development, which can be executed on any browser, any Host, and any Operating System. The TypeScript is a language as well as a set of tools. TypeScript is the ES6 version of JavaScript with some additional features.",
"A computer network is a set of devices connected through links. A node can be computer, printer, or any other device capable of sending or receiving the data. The links connecting the nodes are known as communication channels.Computer Network uses distributed processing in which task is divided among several computers. Instead, a single computer handles an entire task, each separate computer handles a subset.",
"A Control System is a system in which the output is controlled by varying the input. The first control system device was James Watt's Flyball governor, which was invented in 1767. The aim of inventing Flyball governor was to keep the speed of the engine constant by regulating the supply of the steam to the engine.",
"Our core Java programming tutorial is designed for students and working professionals. Java is an object-oriented, class-based, concurrent, secured and general-purpose computer-programming language. It is a widely used robust technology."

]; 


const message = document.getElementById("message");
const textArea = document.getElementById("textArea");
// const btn = document.getElementById('btn');
const bb = document.getElementById("bb");




let startTime , endTime;


const startGame = () =>{

          textArea.disabled = false;


  document.getElementById("bb").style.display = "none";

  timer();

    let randomNumber = Math.floor(Math.random()*paraGraph.length);
    // console.log(randomNumber);


    message.innerText = paraGraph[randomNumber];

    let date = new Date();

    startTime = date.getTime();

    bb.innerText = "Done";

    // function refreshPage(){
    //   window.location.reload();
    // } 

    // refreshPage();






}









const stopTyping = () =>{

          textArea.disabled = true;

  document.getElementById("bb").style.display = "block";

    let date = new Date();
    endTime = date.getTime();

    // let totalTime = ((endTime-startTime)/1000);
    let totalTime = ((endTime-startTime)/1000);
    console.log(totalTime);


   let totolStr = textArea.value;
  //  console.log(totolStr);

   let wordCount = wordCounter(totolStr);


  //  let speed = Math.round((wordCount/totalTime)*60);
  //  let speed = Math.round((wordCount/60)*60);

  let speed = wordCount;

  //  let finalMessage = " Speed :) " + speed + " WPS ";
  let finalMessage = "";


   finalMessage += compareWords(message.innerText , totolStr);
   message.innerText = finalMessage;

   textArea.value = " ";

  //  bb.innerText ="Start ⏱😉";
   bb.innerText ="Start again";
   




}

const compareWords = (str1 , str2) =>{

  let words1 = str1.split(" ");
  let words2 = str2.split(" ");

  let cnt =0;

  words1.forEach(function (item , index){

      if(item == words2[index]){
        cnt++;
      }
  })

  let errorWords = (words1.length - cnt);
  let accuracy = Math.ceil(100*errorWords/cnt) ;

  // return ( " Your Speed is  " + cnt +  " Correct Out Of " + words1.length + " word and the total number of error are  " + errorWords + " .");
  // return ( " Your Speed is  " + cnt + " WPM" + " and Accuracy is"+accuracy );
  return ( " Your Speed is  " + cnt + " WPM"  );
  // return (  " Correct Words :)  " + cnt + "outoff" + words1.length + "   error ;)  " + errorWords + " .");

}


const wordCounter = (str) =>{


      let response = str.split(" ").length;
      console.log(response);
      return response;


}



// bb.addEventListener("click" , function(){

//         console.log(this);
//         console.log("are bhai chal");
//       if(this.innerText == "Start ⏱😉"){

//         // timer();
//         bb.innerText = "Done"
//         textArea.disabled = false;
//         startGame();
         
//       }
//       else if(this.innerText = "Done"){

//         textArea.disabled = true;
//         bb.innerText = "Start ⏱😉";
//         stopTyping();


//       }


// })











 function timer() {
 
  
  var sec = 10;
   document.querySelector("text").innerHTML = sec;

  function updateSec() {
    sec--;
  
          

          document.querySelector("text").innerHTML = sec;

     if (sec === 0) {
      stopTimer();
      
    }
  }


  updateSec();

  var interval = setInterval(updateSec, 1000);

  function stopTimer() {

    // document.querySelector("text").innerHTML = 0;
    // bb.innerText ="Start ⏱😉";
    bb.innerText ="Start again";
   
    clearInterval(interval);


   


    stopTyping();
  }

  
}










    // function refreshPage(){

    //   console.log(this);
    //   if(this.innerText =="Start again")
    //   {
    //     window.location.reload();
    //     bb.innerText ="Start ⏱😉";

    //   }
    // } 

   




bb.addEventListener('click' ,  startGame);



// bb.addEventListener('click' ,  refreshPage());



// function refreshPage(){
//   window.location.reload();
// } 

// bb.addEventListener('click' , function(){

//   console.log(this);
// if(this.innerText == "Done"){


// refreshPage();
// bb.innerText = "Start ⏱😉";
  

   
// }

//  })




    
