import AbstractEvent from 'shared/AbstractEvent';

// 传感器事件
export class SensorEvent extends AbstractEvent {
  // 运行环境原生事件
  get originalEvent() {
    return this.data.originalEvent;
  }

  //  整合触摸屏和鼠标的坐标点X轴和Y轴
  get clientX() {
    return this.data.clientX;
  }

  get clientY() {
    return this.data.clientY;
  }

  // 触发事件的DOM节点
  get target() {
    return this.data.target;
  }

  // 传感器容器
  get container() {
    return this.data.container;
  }

  // 压力传感
  get pressure() {
    return this.data.pressure;
  }
}

// 拖拽开始事件
export class DragStartSensorEvent extends SensorEvent {
  static type = 'drag:start';
}

// 拖动过程事件
export class DragMoveSensorEvent extends SensorEvent {
  static type = 'drag:move';
}
// 拖拽停止事件
export class DragStopSensorEvent extends SensorEvent {
  static type = 'drag:stop';
}

// 拖拽压力传感事件，就是拖拽拾取和释放两阶段
export class DragPressureSensorEvent extends SensorEvent {
  static type = 'drag:pressure';
}
