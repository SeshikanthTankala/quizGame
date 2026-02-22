let questionBook=[
    {
        id:"Q1",
        question:"What is the full form of JS?",
        option:["Java Selenium","Java Structures","Java Script","Java Support"],
        correctOption:"Java Script",
    },
    {
        id:"Q2",
        question:"What is the full form of DOM?",
        option:["Division object Method","Desktop Oriented Method","Document Oriented Manipulation","Document Object Model"],
        correctOption:"Document Object Model",
    },
    {
        id:"Q3",
        question:"What is the full form of BOM?",
        option:["Bold object Method","Browser Oriented Method","Browser Oriented Manipulation","Browser Object Model"],
        correctOption:"Browser Object Model",
    },
    {
        id:"Q4",
        question:"What is the full form of TDZ?",
        option:["Time Dead Zone","Temporal Dead Zone","Time Died Zone","None Of These"],
        correctOption:"Temporal Dead Zone",
    },
    {
        id:"Q5",
        question:"What is the full form of ES?",
        option:["Ecma Script","English Script","Epson Screen","None Of These"],
        correctOption:"Ecma Script",
    }
];
let questionElement=document.getElementById("question");
let optionElement=document.getElementById("option");
let scoreElement=document.getElementById("score");

let currentQuestion=0;
let score=0
function displayQuestion(){
    let {id,question,option,correctOption}=questionBook[currentQuestion];
    // console.log(id);
    // console.log(question);
    // console.log(option);
    // console.log(correctOption);
    questionElement.textContent=question;
    option.map((opt)=>{
        let btn=document.createElement("button")
        btn.textContent=opt
        btn.setAttribute("class","optionButton")
        optionElement.append(btn)
        btn.addEventListener("click",()=>{
            if (opt==correctOption) {
                score+=1;
                btn.style.backgroundColor="green"
            } else {
                btn.style.backgroundColor="red"
                score-=0.25;
            }
            scoreElement.textContent=`Score:${score}/${questionBook.length}`

            
            setTimeout(() => {
                nextQuestion();
            }, 500);
            let allbtn=document.querySelectorAll(".optionButton")
            allbtn.forEach((b)=>b.disabled=true)
        });   
    });
}
displayQuestion();

function nextQuestion(){
    currentQuestion++;
    optionElement.textContent="";
    if (currentQuestion==questionBook.length) {
        questionElement.textContent="Quiz Completed Successfully..!!!";
        scoreElement.textContent=`Score:${score}`;
    } else {
        displayQuestion()
    }
}

// let a=questionBook.map(()=>{
//    return a;
// });
// console.log(a);



