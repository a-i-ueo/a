const questions=[
    {
        question:"問1  コンピュータによる伝票処理システムがある。このシステムは、伝票データをためる待ち行列をもち、M/M/1の待ち行列モデルが適用できるものとする。平均待ち時間がT秒以上となるのは、システムの利用率が少なくとも何％以上になったときか。ここで、伝票データをためる待ち行列の特徴は次のとおりである。\n\r\n・伝票データは、ポアソン分布に従って到着する。\r\n・伝票データをためる数に制限はない。\r\n・1件の伝票データの処理時間は、平均T秒に指数分布に従う。",
        choices:[
            "ア 33",
            "イ 50",
            "ウ 67",
            "エ 88",

        ],
        answer: 1

    }
];

const questionElement=document.getElementById("question");
const choiceElement=document.getElementById("choices");

const currentQuestion=questions[0];

questionElement.textContent=currentQuestion.question;

currentQuestion.choices.forEach(choice => {
    const button = document.createElement("button"); 
    button.textContent=choice;
    button.className = "choice"; 
    choiceElement.appendChild(button);
});