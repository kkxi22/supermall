//防抖函数
export function debouce (func, delay) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout (timer)
    }
    timer = setTimeout (() => {
      func.apply (this, args)
    }, delay)
  }
}

//时间格式化函数，此处仅针对yyyy-MM-dd hh:mm:ss 的格式进行格式化
export function dateFormat(date,fmt) {
    let o = {
        "M+" : date.getMonth()+1,                 //月份
        "d+" : date.getDate(),                    //日
        "h+" : date.getHours(),                   //小时
        "m+" : date.getMinutes(),                 //分
        "s+" : date.getSeconds(),                 //秒
        "q+" : Math.floor((date.getMonth()+3)/3), //季度
        "S"  : date.getMilliseconds()             //毫秒
      };

      if(/(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
      }

      for(let k in o){
        if(new RegExp("("+ k +")").test(fmt)){
          fmt = fmt.replace(
            RegExp.$1, (RegExp.$1.length===1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
      }

      return fmt;
}
