/**
 * const, let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1= "var変数を上書き";
// console.log(val1)

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1)

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "let変数を上書き"
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// constで定義したオブジェクトはプロパティの変更が可能
// // オブジェクトの定義は基本const
// const val4 = {
//   name: "じゃけえ",
//   age: 28,
// };
// console.log(val4);
// val4.name = "jak";
// val4.addres = "Hitoshima";
// console.log(val4);

// reactの開発ではほとんどはconst, あるいはステート
// // constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monky");
// console.log(val5);

/**
 *  テンプレート文字列
 */
// const name ="じゃけえ";
// const age = 28;
// //　「私の名前はじゃけえです、年齢は28歳です。」
// //　従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" +age + "です";
// console.log(message1);

// // テンプレート文字列を用いる
// const message2 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message2)

/**
 * アロー関数
 */
// 従来の関数
//  function func1(str) {
//    return str;
//  }
//  const func1 = function(str){
//    return str;
//  }

//  // アロー関数
//  console.log(func1("func1です"));
// //  const func2 = (str) => {
// //    return str;
// //  };
//  // 処理が一つの場合は省略可能
//  const func2 = (str) => str;

//  console.log(func2("func2です"));

//  const func3 = (num1, num2) => num1 + num2;
//  console.log(func3(10, 20));
//  // thisが気になったら調べて

/**
 * 分割代入
 */

//  const myProfile = {
//    name: "じゃけえ",
//    age: 28,
//  };

//  const mesog(message1);

//  const {name, age} = myProfile ;
//  const message2 = `名前は${name}です。年齢は${age}です。..`;
//  console.log(message2);

// //配列にも使用可能
// const myProfile = ["じゃけえ", 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// // 配列の場合は格納順に宣言すること
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// デフォルト値はundefinedの回避する初期値
// const sayHello = (name = "じゃけえ") => console.log(`こんにちは${name}さん！`);
// sayHello("asasa");

/**
 * スプレッド構文 ...
 */

//  // 配列の展開
//  const arr1 = [1 ,2];
// //  console.log(arr1);
// //  console.log(...arr1);

//  const sumFunc = (num1, num2) => console.log(num1 +　num2);
//  sumFunc(arr1[0], arr1[1]);
//  sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピーや結合
const arr4 = [10, 20];
const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4, ...arr5]
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// // ↓参照が引き継がれるので、もとの変数に影響を与える
// console.log(arr4);

const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6);
// ↓参照は引き継がれないので、元の関数に影響を与えない
console.log(arr4);
