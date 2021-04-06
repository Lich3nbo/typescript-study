// // 定义接口

// interface Person {
//   name: string,
//   age: number
// }

// //  定义的变量必须和接口保持一致
// let tom: Person = {
//   name: 'tom',
//   age: 10
// }

// // 可选属性

// interface Animal {
//   name: string,
//   age?: number
// }


// let cat: Animal = {
//   name: 'tom'
// }


// 任意属性
interface Person {
  name: string;
  [propName: string]: any;
}

