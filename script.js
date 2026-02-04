const questions=[
    {
        question:"問1   コンピュータによる伝票処理システムがある。このシステムは、伝票データをためる待ち行列をもち、M/M/1の待ち行列モデルが適用できるものとする。平均待ち時間がT秒以上となるのは、システムの利用率が少なくとも何％以上になったときか。ここで、伝票データをためる待ち行列の特徴は次のとおりである。\n\r\n・伝票データは、ポアソン分布に従って到着する。\r\n・伝票データをためる数に制限はない。\r\n・1件の伝票データの処理時間は、平均T秒に指数分布に従う。",
        choices:[
            "ア 33",
            "イ 50",
            "ウ 67",
            "エ 88",
        ],
        answer: 1,

    },
    {
        question:"問2   AIにおける機材学習において、2クラス分類モデルの評価方法の一つであるROC曲線で用いられる偽陽性率の説明として、最も適切なものはどれかここで、分類されるデータには正しいものと間違っているものが含まれるものとする。",
        choices:[
            "ア ”間違い”と予測したデータのうち、実際は”正しい”データの割合",
            "イ 実際に”間違い”であるデータに対し、誤って”正しい”と予測したデータの割合",
            "ウ 実際に”間違い”であるデータに対し、正しく”間違い”と予測したデータの割合",
            "エ 全データのうち、実際に正しく予測できなかったデータの割合",
        ],
        answer:1,
        explantion:
        "ア-異常を正常と誤判定する割合。→偽陰性\nイ-正解!\nウ-異常を正しく検出する割合。→真陽性率\nエ-誤検知が少ない。→偽陽性率の定義ではない。",

    }
];

let currentIndex=0;

const questionElement=document.getElementById("question");
const choiceElement=document.getElementById("choices");
const resulteElement=document.getElementById("result");

function showQuestion(){
    const q =questions[currentIndex];
    questionElement.textContent=q.question;
    choiceElement.innerHTML="";
    resulteElement.textContent="";

    q.choices.forEach((choice,index) =>{
        const button=document.createElement("button");
        button.textContent=choice;

        button.addEventListener("click",()=>{
            const buttons=document.querySelectorAll("#choices button");
            buttons.forEach(b =>b.disabled=true);

            if(index===q.answer){
                resulteElement.textContent="正解!";
            }else{
                resulteElement.textContent="不正解!";
            }

            explantionElement.textContent=q.explantion;

            setTimeout(() =>{
                currentIndex++;
                if(currentIndex<questions.length){
                    showQuestion();
                } else{
                    questionElement.textContent="おわり!!!!";
                    choiceElement.innerHTML="";
                    explantionElement.textContent="";
                }
            }, 2000);
        });
        choiceElement.appendChild(button);
    });
}

showQuestion();
