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



function debounceDecoratorNew(func) {
  // Ваш код
  let isCooldown = false;
  let timeout = null;

  const wrapper = function() {
    wrapper.allCount += 1;
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => (isCooldown = false), this.ms);
    if (isCooldown) {
      wrapper.count += 1;
      return;
    }
    func.apply(this, arguments);
    isCooldown = true;
  };
  wrapper.count = 0
  wrapper.allCount = 0
  return wrapper
}