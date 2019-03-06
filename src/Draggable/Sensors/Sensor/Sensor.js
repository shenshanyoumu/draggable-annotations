// 传感器基类
export default class Sensor {
  // 传感器容器，其中包含一组HTML元素
  constructor(containers = [], options = {}) {
    this.containers = [...containers];
    this.options = {...options};

    // 释放正在发生拖拽行为
    this.dragging = false;

    // 传感器的当前容器
    this.currentContainer = null;
  }

  // 将传感器绑定到事件监听中
  attach() {
    return this;
  }

  /**
   * Detaches sensors event listeners to the DOM
   * @return {Sensor}
   */
  detach() {
    return this;
  }

  /**
   * Adds container to this sensor instance
   * @param {...HTMLElement} containers - Containers you want to add to this sensor
   * @example draggable.addContainer(document.body)
   */
  addContainer(...containers) {
    this.containers = [...this.containers, ...containers];
  }

  /**
   * Removes container from this sensor instance
   * @param {...HTMLElement} containers - Containers you want to remove from this sensor
   * @example draggable.removeContainer(document.body)
   */
  removeContainer(...containers) {
    this.containers = this.containers.filter((container) => !containers.includes(container));
  }

  //  传感器触发事件
  trigger(element, sensorEvent) {
    const event = document.createEvent('Event');
    event.detail = sensorEvent;
    event.initEvent(sensorEvent.type, true, true);

    // 原生Event事件实例的dispatchEvent用于触发事件
    element.dispatchEvent(event);
    this.lastEvent = sensorEvent;

    return sensorEvent;
  }
}
