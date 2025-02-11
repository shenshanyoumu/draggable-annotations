import AbstractPlugin from 'shared/AbstractPlugin';
import {closest} from 'shared/utils';
import {CollidableInEvent, CollidableOutEvent} from './CollidableEvent';

// 基于ES6的Symbol类型创建的实例，不会存在属性冲突问题
const onDragMove = Symbol('onDragMove');
const onDragStop = Symbol('onDragStop');
const onRequestAnimationFrame = Symbol('onRequestAnimationFrame');

// 该插件用于检测在拖拽过程中的物理碰撞行为
export default class Collidable extends AbstractPlugin {
  // 传递可拖拽的元素
  constructor(draggable) {
    super(draggable);

    // 记录当前正在碰撞的元素
    this.currentlyCollidingElement = null;

    /**
     * Keeps track of currently colliding elements
     * @property {HTMLElement|null} lastCollidingElement
     * @type {HTMLElement|null}
     */
    this.lastCollidingElement = null;

    // 碰撞动画帧
    this.currentAnimationFrame = null;

    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[onRequestAnimationFrame] = this[onRequestAnimationFrame].bind(this);
  }

  // 绑定特定的事件类型
  attach() {
    this.draggable.on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
  }

  /**
   * Detaches plugins event listeners
   */
  detach() {
    this.draggable.off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
  }

  // 获得与当前拖拽的元素能发生碰撞的元素
  getCollidables() {
    const collidables = this.draggable.options.collidables;

    if (typeof collidables === 'string') {
      return Array.prototype.slice.call(document.querySelectorAll(collidables));
    } else if (collidables instanceof NodeList || collidables instanceof Array) {
      return Array.prototype.slice.call(collidables);
    } else if (collidables instanceof HTMLElement) {
      return [collidables];
    } else if (typeof collidables === 'function') {
      return collidables();
    } else {
      return [];
    }
  }

  /**
   * Drag move handler
   * @private
   * @param {DragMoveEvent} event - Drag move event
   */
  [onDragMove](event) {
    const target = event.sensorEvent.target;

    this.currentAnimationFrame = requestAnimationFrame(this[onRequestAnimationFrame](target));

    if (this.currentlyCollidingElement) {
      event.cancel();
    }

    const collidableInEvent = new CollidableInEvent({
      dragEvent: event,
      collidingElement: this.currentlyCollidingElement,
    });

    const collidableOutEvent = new CollidableOutEvent({
      dragEvent: event,
      collidingElement: this.lastCollidingElement,
    });

    const enteringCollidable = Boolean(
      this.currentlyCollidingElement && this.lastCollidingElement !== this.currentlyCollidingElement,
    );
    const leavingCollidable = Boolean(!this.currentlyCollidingElement && this.lastCollidingElement);

    if (enteringCollidable) {
      if (this.lastCollidingElement) {
        this.draggable.trigger(collidableOutEvent);
      }

      this.draggable.trigger(collidableInEvent);
    } else if (leavingCollidable) {
      this.draggable.trigger(collidableOutEvent);
    }

    this.lastCollidingElement = this.currentlyCollidingElement;
  }

  /**
   * Drag stop handler
   * @private
   * @param {DragStopEvent} event - Drag stop event
   */
  [onDragStop](event) {
    const lastCollidingElement = this.currentlyCollidingElement || this.lastCollidingElement;
    const collidableOutEvent = new CollidableOutEvent({
      dragEvent: event,
      collidingElement: lastCollidingElement,
    });

    if (lastCollidingElement) {
      this.draggable.trigger(collidableOutEvent);
    }

    this.lastCollidingElement = null;
    this.currentlyCollidingElement = null;
  }

  /**
   * Animation frame function
   * @private
   * @param {HTMLElement} target - Current move target
   * @return {Function}
   */
  [onRequestAnimationFrame](target) {
    return () => {
      const collidables = this.getCollidables();
      this.currentlyCollidingElement = closest(target, (element) => collidables.includes(element));
    };
  }
}
