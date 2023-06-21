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

/**
 * テンプレート文字列
 */
const name = "migu";
const age = 28;
//私の名前はmiguです。

//従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

//テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);
