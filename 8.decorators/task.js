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
    cache.push({ hash, value });
    if (cache.length > 5) {
      cache.shift({ hash, value })
    }
    return 'Вычисляем: ' + value;
  }
  return wrapper;

}



function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let isFirstTime = true;
  function wrapper(...args) {
    if (isFirstTime) {
      wrapper.count += 1;
      isFirstTime = false;
      return func(...args);
    };
    wrapper.allCount += 1;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      wrapper.count += 1;
      return func(...args);
    }, delay)
  };
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}