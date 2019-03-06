// 注意下面实现，套入两层requestAnimationFrame函数。在第一层执行后返回一个函数，当函数参数被调用后才真正处理逻辑

export default function requestNextAnimationFrame(callback) {
  return requestAnimationFrame(() => {
    requestAnimationFrame(callback);
  });
}
