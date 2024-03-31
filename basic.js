// オブジェクト　複数のデータを持つ
// プロパティにデータを入れる
const user = {
    neme: "wakugawa",
    age: 23,
    gender: "male"
}






// 演算子 ===　&& || ?? 　三項演算子
const number1 = 1;
const number2 = 2;
const number3 = 3;

console.log(number1 === 1); //true
console.log(number2 === 1); //false

// 両方の条件を満たせばtrue,満たせてないならfalse
console.log(number1 === 1 && number2 === 2); //true
console.log(number1 === 1 && number2 === 1); //false

//  片方の条件でも満たせていたらtrue,どれも満たせていないならfalse
console.log(number1 === 1 || number2 === 2); //trure
console.log(number1 === 2 || number2 === 3);

// 否定系
console.log(number1 === 1); //true
console.log(!(number1 === 1)); //false)

// 二重否定 文字が入ってるか確認
console.log(!! number1); //true
console.log(!! undefined); //false

// null合体演算子
// ??の左辺がnull,undefinedなら右辺を出力する
// ??の左辺に値があれば左辺の数字を出す
const number4 = null;
const number5 = 100;
const number6 = 6;

console.log(number4 ?? number5); //100
console.log(number6 ?? number5); //6

// 三項演算子
// 条件分がtrueなら左辺、falseなら右辺を出力する
const number7 = 7;
const number8 = 8;

console.log(number7 === 7 ? "当たり" : "間違い"); //当たり
console.log(number8 === 7 ? "当たり" : "間違い"); //間違い






// if文、switch分 条件分岐分
// if文
const point = 70;

if(point >= 80) {
    console.log("if　あなたは優秀");
} else if(point >= 60) {
    console.log("if　あなたは普通");
} else if(point >= 40) {
    console.log("if　あなたは努力が足りない");
} else {
    console.log("if　もっと頑張れ");
};

// switch
const color = "青";

switch(color) {
    case "赤":
        console.log("switch　止まれ");
        break;

    case "黄色":
        console.log("switch　注意");
        break;
    
    case "青":
        console.log("switch　進め");
        break;
};






// while文,for文 ループ文
// while
const apple = 100;

let quantity = 1;
while (quantity <= 10) {
  console.log(`while　りんご${quantity}個の値段は${apple * quantity}円です。`);
  quantity += 1;
}

// for
const cola = 24;
const cases = 6;
for (let quantity = 1; quantity <= 10; quantity += 1) {
  console.log(`for　${cola}本入りのコーラが${cases}ケースあって合計${cola * cases}本あります。`);
};






// 関数　arrow関数
function getHello() {
    return "Hello!!!"
};

// arrow関数　これが主流
const getHello2 = () => {
    return "Hello2!!!"
};

// ()を付けないと関数全体が出力される
console.log("関数", getHello());
console.log("アロー関数", getHello2());

// 上で定義したuserオブジェクトを呼び出す
const returnUser = () => {
    return user;
}
console.log(returnUser(user));

// オブジェクトの中に関数を入れてみる
// テンプレートリテラルを使う時はバッククォートと${}が必要
const func = {
    getWorld: () => {
        return "今日もお疲れ様です"
    },
    getWorld2: () => "今日も1日頑張ったね",
    age: 22,
    getAge: (age) => `私の年齢は${age}です`
};

console.log("オブジェクトの中に関数", func.getWorld());
console.log("オブジェクトの中に関数", func.getWorld2());
// 引数を関数に渡して表示　
console.log("オブジェクトの中に関数", func.getAge(func.age));






// map関数
// 新しい配列を作る（指定のプロパティだけなど）
// jojosは連想配列になっている　配列の中にオブジェクトが並んでいる
const jojos = [
    {name: 'ジョナサン', age: 20},
    {name: 'ジョセフ', age: 18},
    {name: '承太郎', age: 18},
    {name: '仗助', age: 16}
];

const mapJojo = jojos.map((jojo) => {
    return jojo.name;
}
);
console.log("map関数", mapJojo);

// 配列に新しいデータ（プロパティ）の追加も可能
// ...はスプレッド演算子　連想配列を展開する
const mapJojo2 = jojos.map((jojo) => {
    return {
        ...jojo,
        isAdult: jojo.age >= 18,
        isMain: true
    }
}
);
console.log("map関数でデータを追加", mapJojo2);






// filter関数 該当のデータのみ抽出
const filterJojo = jojos.filter((jojo) => {
    return jojo.age === 18;
}
);
console.log("filter関数", filterJojo);






// アラート　
// confirmはキャンセル、はいが表示される
if(confirm("君は「引力」を信じるか？")) {
    alert("信じてくれてありがとう")
};






// イベント
const button = document.getElementById("button");
const input = document.getElementById("input");
const result = document.getElementById("result");
const result2 = document.getElementById("result2");

button.addEventListener("click", () => {
    console.log('button click');
    console.log(input.value);
    result.textContent = input.value;
    input.value = null;
}
);

input.addEventListener("change", (e) => {
    console.log(e.target.value);
    result2.textContent = input.value;
    
}
);

// classの付与
// HTML内の文字の切り替え　
const target = document.getElementById('toggle');

target.addEventListener("click", () => {
    if(target.innerHTML === "赤色") {
        target.innerHTML = "青色";
    } else {
        target.innerHTML = "赤色";
    };
    target.classList.toggle('after');
}
);






// コールバック関数 高階関数に渡された関数の事
// 高階関数 関数呼び出しながら別の関数を呼び出せる　fn部分がaaでも実行される
const confirmed = (aa) => {
    if(window.confirm("実行しますか？")) {
        aa();
    }
};

const unfollow = () => {
    console.log("フォローを外しました");
};

const cancelTweet = () => {
    console.log("ツイートをキャンセルしました");
};

confirmed(unfollow);
confirmed(cancelTweet);

// forEachメソッドでコールバック関数を実装する
const array = ['コールバック関数', 'で', 'forEachメソッドを', '作ってみる'];

const forEach = function (array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
};
forEach(array, function(item, index) {
    console.log(`コールバック関数の実行${index}回目`, item);
});






// クラス　オブジェクト指向
// コンストラクタはインスタスを生成する時に実行したい処理や設定を追加する機能
// コンストラクタで引数を受け取る事が出来る
// this.プロパティ = 値 生成されたインスタンスにプロパティと値を追加する事が出来る
class Macaron{
    constructor(name,introduce) {
      this.name = name;
      this.introduce = introduce;
    }
  }

// インスタンス
const macaron3 = new Macaron("レモン","愛媛産のレモンの甘酸っぱさがクセになるマカロン");
console.log(macaron3.name); //レモン
console.log(macaron3.introduce); //愛媛産のレモンの甘酸っぱさがクセになるマカロン


class Member {
    constructor(name, role) {
      this.name = name;
      this.role = role;
    }
    greet() {
      console.log("初めまして！");
    }
    introduce() {
      this.greet(); 
   
      console.log(`${this.role}を担当しています、${this.name}です`);
    }
  }
   
const member = new Member("田中", "調理");
member.introduce(); //初めまして！　　
                    //調理を担当しています、田中です







// setTimeout　時間を遅らせる
// イベントの中に関数を入れる 中にある関数を使う為に関数を外に出す　クロージャー(？？？)
// {once: true}を関数の最後に追加し、一度しか呼び出せないようにしている
const timeOut = document.getElementById('timeOut');

timeOut.addEventListener("click", () => {
    setTimeout(() => {
        alert("The World!!!!!(ザ・ワールド)")
    }, 3000)
    setTimeout();
},{once: true}
);






// Promise async await
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("成功しました");
        // reject("失敗しました");
    }, 3000);
}
);

promise.then((success) =>{
    console.log('プロミス',success);
}
).catch((error) => {
    console.log('error')

}
);

// 主流は async await
// 外部データデータ（API）の返却を待ってあげて、その後の処理を行う時などに使う
// 処理が完了するまで次の処理をストップする
// fetch関数は外部APIを叩くときに必要 json()も必要
const url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";
const weather = async () => {
    const response = await fetch(url);
    console.log('処理１');
    console.log(response);
    console.log('処理2');
    console.log('処理3');
    const json = await response.json();
    return json;
}

console.log(weather());

