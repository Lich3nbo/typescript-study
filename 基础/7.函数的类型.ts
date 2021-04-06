// 1.函数声明

function sum(x: number, y: number): number { 
  return x + y
}


// 2.函数表达式 ( 我们需要手动给 mySum 添加类型)
let mySum: ( x: number, y: number) => number = function(x: number, y: number): number{
  return x + y
}

// 3. 接口定义


// 4. 可选参数

// 5. 参数默认值

// 6. 剩余参数

// 7. 重载

