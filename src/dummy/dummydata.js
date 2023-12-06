import { codeImg } from "../assets"
export const Questions = [
    {
        questionText : "What is The Capital Of France ?",
        answerOptions:[
            {answerText:"A : New York",isCorrect:false},
            {answerText:"B : London",isCorrect:false},
            {answerText:"C : Paris",isCorrect:true},
            {answerText:"D : Dublin",isCorrect:false}
        ],
        imgSrc:false,
        mark :"3"
    },
    {
        questionText : "Who Is Ceo Of Tesla ?",
        answerOptions:[
            {answerText:"A : Jeff Bezos",isCorrect:false},
            {answerText:"B : Elon Musk",isCorrect:true},
            {answerText:"C : Bill Gates",isCorrect:false},
            {answerText:"D : Tony Stark",isCorrect:false}
        ],
        imgSrc:false,
        mark :"2"
    },
    {
        questionText : "The iPhone was created by which Company ?",
        answerOptions:[
            {answerText:"A : Apple",isCorrect:true},
            {answerText:"B : Intel",isCorrect:false},
            {answerText:"C : Amazon",isCorrect:false},
            {answerText:"D : Microsfot",isCorrect:false}
        ],
        imgSrc:false,
        mark :"2"
    },
    {
        questionText : "How Many Harry Potter Books are there ?",
        answerOptions:[
            {answerText:"A : 1",isCorrect:false},
            {answerText:"B : 4",isCorrect:false},
            {answerText:"C : 6",isCorrect:false},
            {answerText:"D : 7",isCorrect:true}
        ],
        imgSrc:codeImg,
        mark :"3"
    }
]


export const emp = [
    {
        id:1,
        title:"Front-end Developer",
        loc:"Cairo",
        skill:["html","css","react"],
        lastView:2,
        filterJobType:1,
        jobType:"Full Time",
        filterLevel:1,
        level:"Entry Level",
        filterSalary:2,
        Salary:5000
    },
    {
        id:2,
    title:"Back-end Developer",
        loc:"Cairo",
        skill:["html","css","node"],
        lastView:1,
        filterJobType:2,
        jobType:"Part Time",
        filterLevel:2,
        level:"Intermedaite",
        filterSalary:3,
        Salary:12000
    },
    {
        id:3,
    title:"Front-end Developer",
        loc:"Giza",
        skill:["html","css","JavaScript"],
        lastView:3,
        filterJobType:3,
        jobType:"Remote",
        filterLevel:3,
        level:"Expert",
        filterSalary:1,
        Salary:3000
    },
    {
        id:4,
        title:"Back-end Developer",
        loc:"Alex",
        skill:["html","css","Php"],
        lastView:4,
        filterJobType:2,
        jobType:"Part Time",
        filterLevel:2,
        level:"Intermedaite",
        filterSalary:3,
        Salary:12000
    },
    {
        id:5,
        title:"PHP Developer",
        loc:"Giza",
        skill:["html","css","Php"],
        lastView:6,
        filterJobType:1,
        jobType:"Full Time",
        filterLevel:3,
        level:"Expert",
        filterSalary:2,
        Salary:8000
    },
    {
        id:6,
        title:"Javascript Developer",
        loc:"Cairo",
        skill:["html","css","Javascript"],
        lastView:1,
        filterJobType:3,
        jobType:"Remote",
        filterLevel:3,
        level:"Expert",
        filterSalary:3,
        Salary:14000
    },
    {
        id:7,
        title:"Data Analytic",
        loc:"Alex",
        skill:["html","css","Python"],
        lastView:6,
        filterJobType:2,
        jobType:"Part Time",
        filterLevel:1,
        level:"Entry Level",
        filterSalary:1,
        Salary:3500
    }
]