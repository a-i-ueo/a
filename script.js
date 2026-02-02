const question=[
    {
        question:"コンピュータによる伝票処理システムがある。このシステムは、伝票データをためる待ち行列をもち、M/M/1の待ち行列モデルが適用できるものとする。平均待ち時間がT秒以上となるのは、システムの利用率が少なくとも何％以上になったときか。ここで、伝票データをためる待ち行列の特徴は次のとおりである。",
        choices:[
            "ア 33",
            "イ 50",
            "ウ 67",
            "エ 80",

        ],
        answer: 0
    }
];

const questionElement=document.getElementById("question");
const choiceElement=document.getElementById("choices");

const currentQuestion=question[0];

questionElement.textContent=currentQuestion.question;

currentQuestion.answer.choices.array.forEach(choices=> {
    const button=document.createElement=("button")
    button.textContent=choice;
    button.className="choice"
    choiceElement.appendChild(button);
});