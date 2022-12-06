function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...rest) {
    let hash = rest.join(',');
    let existResult = cache.find(cacheRecord => cacheRecord.hash === hash);
    if (existResult !== undefined) {
        console.log('Из кэша: ' + existResult.value);
        return 'Из кэша: ' + existResult.value;
    } 
      let value = func.call(this, ...rest);
      console.log('Вычисляем: ' + value);
    if (cache.length < 5) {   
        cache.push({hash, value});
      } 
        cache.unshift({hash, value});
        cache.pop();
      return 'Вычисляем: ' + value;
  }
  return wrapper;
  
  }



  function debounceDecoratorNew(func, ms) {
    let count = 0;
    let allCount = 0;
    let timeout;
    let flag = true;
    return function (...rest) {
      
      clearTimeout(timeout);
        if (!flag) {
          timeout = setTimeout(() => {
          func.call(this, ...rest); 
          flag = true;
          count++;
            }, ms);
        }
       allCount++;
      return debounceDecoratorNew.call(this, ...rest);
    };   
  }