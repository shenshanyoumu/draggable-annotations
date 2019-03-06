import AbstractEvent from 'shared/AbstractEvent';

// 可碰撞事件
export class CollidableEvent extends AbstractEvent {
  static type = 'collidable';

  /**
   * Drag event that triggered this colliable event
   * @property dragEvent
   * @type {DragEvent}
   * @readonly
   */
  get dragEvent() {
    return this.data.dragEvent;
  }
}

// 当元素发生碰撞时，根据物理规则会出现一个形态压缩过程
export class CollidableInEvent extends CollidableEvent {
  static type = 'collidable:in';

  /**
   * Element you are currently colliding with
   * @property collidingElement
   * @type {HTMLElement}
   * @readonly
   */
  get collidingElement() {
    return this.data.collidingElement;
  }
}

// 当物体碰撞时，除了形态压缩，还会出现形态畸变过程
export class CollidableOutEvent extends CollidableEvent {
  static type = 'collidable:out';

  /**
   * Element you were previously colliding with
   * @property collidingElement
   * @type {HTMLElement}
   * @readonly
   */
  get collidingElement() {
    return this.data.collidingElement;
  }
}
