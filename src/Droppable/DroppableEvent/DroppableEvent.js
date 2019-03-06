import AbstractEvent from 'shared/AbstractEvent';

// 在拖拽过程中，只有可拖放的元素才允许其他元素放置到该元素内
export class DroppableEvent extends AbstractEvent {
  static type = 'droppable';

  get dragEvent() {
    return this.data.dragEvent;
  }
}

// 拖放开始事件
export class DroppableStartEvent extends DroppableEvent {
  static type = 'droppable:start';
  static cancelable = true;

  // 获得拖放区域
  get dropzone() {
    return this.data.dropzone;
  }
}

// 拖放完成事件
export class DroppableDroppedEvent extends DroppableEvent {
  static type = 'droppable:dropped';
  static cancelable = true;

  // 拖放完备的拖放区域
  get dropzone() {
    return this.data.dropzone;
  }
}

// 拖放完全结束后触发的事件
export class DroppableReturnedEvent extends DroppableEvent {
  static type = 'droppable:returned';
  static cancelable = true;

  /**
   * The dropzone element you dragged away from
   * @property dropzone
   * @type {HTMLElement}
   * @readonly
   */
  get dropzone() {
    return this.data.dropzone;
  }
}

// 拖放停止事件
export class DroppableStopEvent extends DroppableEvent {
  static type = 'droppable:stop';
  static cancelable = true;

  /**
   * The final dropzone element of the draggable element
   * @property dropzone
   * @type {HTMLElement}
   * @readonly
   */
  get dropzone() {
    return this.data.dropzone;
  }
}
