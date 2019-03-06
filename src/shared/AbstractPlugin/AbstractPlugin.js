// 插件基类
export default class AbstractPlugin {
  //  插件实例保存一个可拖拽对象实例
  constructor(draggable) {
    /**
     * Draggable instance
     * @property draggable
     * @type {Draggable}
     */
    this.draggable = draggable;
  }

  //  将插件与事件监听器进行绑定
  attach() {
    throw new Error('Not Implemented');
  }

  // 将插件与事件监听器分离
  detach() {
    throw new Error('Not Implemented');
  }
}
