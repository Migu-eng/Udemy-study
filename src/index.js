/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数上書き";
// console.log(val1);

// var val1 = "var再上書き";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 ="let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// val3 ="constを上書き"

// const val3 = "const変数を再宣言"

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "migu",
//   age: 28
// };
// console.log(val4);
// val4.name = "konnbu";
// val4.address = "isikawa";
// console.log(val4);

//constで定義した配列はプロパテぃの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "cat";
// val5.push("monkey");
// console.log(val5);

// /**
//  * テンプレート文字列
//  */
// const name = "migu";
// const age = 28;
// //私の名前はmiguです。

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//アロー関数

//従来の方法
// function func1(str){
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

// //分割代入
// const myProfile = {
//   name: "Migu",
//   age: 23
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳ですよ。`;
// console.log(message2);

// const myProfile = ["Migu", 23];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// //配列分割代入
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// //デフォルト値,引数など
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
// sayHello("Migu");

// /**スプレッド構文 */
// //配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// //まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// //スプレッド構文
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// //上書きになってしまう。
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["migu", "yuki", "risa"];
//  for (let index = 0; index <nameArr.length; index++){
//    console.log(`${index+1}番目は${nameArr[index]}です`);
//  };
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

//mapの引数に関して勉強する
//nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// //filtterについて
// const numArr = [1,2,3,4,5,];

// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "risa") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

//三項演算子について
//ある条件? 条件がtrueの時　：　条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum)

// const checkSum = (num1, num2, num3) => {
//   return num1 + num2 + num3 > 100 ? "100を超えています！" : "許容範囲です";
// };
// console.log(checkSum(50, 50, 1));

/**
 * 論理演算子の本当の意味を知ろう
 */

// const migu1 = true;
// const migu2 = false;

// if(migu1||migu2){
//   console.log("1も２もtrueになります");
// }
// if(migu1 && migu2){
//   console.log("1も２もtrueになります");
// }

// ||は左側がfalseなら右側を返す　　　左がtrueなら左を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

// &&左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
