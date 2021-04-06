// 在不确定联合类型的变量是那个类型的时候， 我们会访问联合类型的所有类型里面共有的方法或属性

funciton getLength(something: string | number): number {
  return something.length;
}