const questions=[
    {
        questions:"コンピュータによる伝票処理システムがある。このシステムは、伝票データをためる待ち行列をもち、M/M/1の待ち行列モデルが適用できるものとする。平均待ち時間がT秒以上となるのは、システムの利用率が少なくとも何％以上になったときか。ここで、伝票データをためる待ち行列の特徴は次のとおりである。",
        choices:[
            "伝票データは、ポアソン分布に従って到着する。",
            "伝票データをためる数に制限はない。",
            "1件の伝票データの処理時間は、平均T秒に指数分布に従う。",
            "到着間隔は一定である。",

        ],
        answer: 0
    }
];

const questionElement=document.getElementById("question");
const choiceElement=document.getElementById("choice");

const currentQuestion=questions[0];

questionElement.textContent=currentQuestion.question;

currentQuestion.answer.choices.array.forEach(choice => {
    const button=document.createElement=("button")
    button.textContent=choice;
    button.className="choice";
    choiceElement.appendChild(button);
});