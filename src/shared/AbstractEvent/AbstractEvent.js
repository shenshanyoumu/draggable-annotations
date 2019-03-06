const canceled = Symbol('canceled');

// 整个拖拽库定义的事件基类
export default class AbstractEvent {
  // 事件类型
  static type = 'event';

  // 事件是否可取消
  static cancelable = false;

  //  事件携带的数据负载
  constructor(data) {
    this[canceled] = false;
    this.data = data;
  }

  // 获得事件类型
  get type() {
    return this.constructor.type;
  }

  // 判断事件是否可取消
  get cancelable() {
    return this.constructor.cancelable;
  }

  // 取消事件
  cancel() {
    this[canceled] = true;
  }

  //  判断事件是否已经被取消
  canceled() {
    return Boolean(this[canceled]);
  }

  // 事件克隆
  clone(data) {
    return new this.constructor({
      ...this.data,
      ...data,
    });
  }
}
