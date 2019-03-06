import AbstractEvent from 'shared/AbstractEvent';

// 拖拽事件
export class DragEvent extends AbstractEvent {
  static type = 'drag';

  //  拖拽源对象
  get source() {
    return this.data.source;
  }
  // 基于运行时的原始对象
  get originalSource() {
    return this.data.originalSource;
  }

  // 可拖拽的镜像对象
  get mirror() {
    return this.data.mirror;
  }

  /**
   * Draggables source container element
   * @property sourceContainer
   * @type {HTMLElement}
   * @readonly
   */
  get sourceContainer() {
    return this.data.sourceContainer;
  }

  // 事件对应的传感器事件
  get sensorEvent() {
    return this.data.sensorEvent;
  }

  /**
   * Original event that triggered sensor event
   * @property originalEvent
   * @type {Event}
   * @readonly
   */
  get originalEvent() {
    if (this.sensorEvent) {
      return this.sensorEvent.originalEvent;
    }

    return null;
  }
}

/**
 * Drag start event
 * @class DragStartEvent
 * @module DragStartEvent
 * @extends DragEvent
 */
export class DragStartEvent extends DragEvent {
  static type = 'drag:start';
  static cancelable = true;
}

/**
 * Drag move event
 * @class DragMoveEvent
 * @module DragMoveEvent
 * @extends DragEvent
 */
export class DragMoveEvent extends DragEvent {
  static type = 'drag:move';
}

/**
 * Drag over event
 * @class DragOverEvent
 * @module DragOverEvent
 * @extends DragEvent
 */
export class DragOverEvent extends DragEvent {
  static type = 'drag:over';
  static cancelable = true;

  /**
   * Draggable container you are over
   * @property overContainer
   * @type {HTMLElement}
   * @readonly
   */
  get overContainer() {
    return this.data.overContainer;
  }

  /**
   * Draggable element you are over
   * @property over
   * @type {HTMLElement}
   * @readonly
   */
  get over() {
    return this.data.over;
  }
}

/**
 * Drag out event
 * @class DragOutEvent
 * @module DragOutEvent
 * @extends DragEvent
 */
export class DragOutEvent extends DragEvent {
  static type = 'drag:out';

  /**
   * Draggable container you are over
   * @property overContainer
   * @type {HTMLElement}
   * @readonly
   */
  get overContainer() {
    return this.data.overContainer;
  }

  /**
   * Draggable element you left
   * @property over
   * @type {HTMLElement}
   * @readonly
   */
  get over() {
    return this.data.over;
  }
}

/**
 * Drag over container event
 * @class DragOverContainerEvent
 * @module DragOverContainerEvent
 * @extends DragEvent
 */
export class DragOverContainerEvent extends DragEvent {
  static type = 'drag:over:container';

  /**
   * Draggable container you are over
   * @property overContainer
   * @type {HTMLElement}
   * @readonly
   */
  get overContainer() {
    return this.data.overContainer;
  }
}

// 将元素拖拽出容器触发的事件
export class DragOutContainerEvent extends DragEvent {
  static type = 'drag:out:container';

  /**
   * Draggable container you left
   * @property overContainer
   * @type {HTMLElement}
   * @readonly
   */
  get overContainer() {
    return this.data.overContainer;
  }
}

/**
 * Drag pressure event
 * @class DragPressureEvent
 * @module DragPressureEvent
 * @extends DragEvent
 */
export class DragPressureEvent extends DragEvent {
  static type = 'drag:pressure';

  get pressure() {
    return this.data.pressure;
  }
}

// 拖拽停止事件
export class DragStopEvent extends DragEvent {
  static type = 'drag:stop';
}
