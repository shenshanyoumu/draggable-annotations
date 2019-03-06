import AbstractEvent from 'shared/AbstractEvent';

/**
 * Base draggable event
 * @class DraggableEvent
 * @module DraggableEvent
 * @extends AbstractEvent
 */
export class DraggableEvent extends AbstractEvent {
  static type = 'draggable';

  get draggable() {
    return this.data.draggable;
  }
}

// 可拖拽初始化事件
export class DraggableInitializedEvent extends DraggableEvent {
  static type = 'draggable:initialize';
}

// 可拖拽销毁事件
export class DraggableDestroyEvent extends DraggableEvent {
  static type = 'draggable:destroy';
}
