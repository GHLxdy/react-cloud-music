//防抖函数
export const debounce = (func:Function, delay:number) => {
  let timer:any;
  return function (this:Object,...args:any) {
    if(timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
      clearTimeout(timer);
    }, delay);
  }; 
};