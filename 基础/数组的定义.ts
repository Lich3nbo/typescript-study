// 表示数组

// 1.类型 + [] 表示法
let fibonacci: number[] = [1,2,3,45];

// 2.数组泛型
let fibonacci1 : Array<number> = [1,2,4]

// 3.用接口表示数组
interface NumberArray {
  [index: number]: number
}

let numberArray: NumberArray = [1,2,3,45]
