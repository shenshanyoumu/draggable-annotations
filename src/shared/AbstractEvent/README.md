## 抽象事件

这是整个拖拽库能够触发的事件基类，开发者基于该基类创建自定义事件类型
| | |
| ----------------- | --------------- |
| **Specification** | `AbstractEvent` |
| **Interface** | `AbstractEvent` |
| **Cancelable** | false |
| **Cancel action** | - |
| **type** | `event` |

### API

**`new AbstractEvent(data: Object): AbstractEvent`**  
创建一个 `AbstractEvent` 实例.

**`abstractEvent.cancel(data: Object): null`**  
取消拖拽开始行为.

**`abstractEvent.canceled(): Boolean`**  
检测事件是否被取消.

**`abstractEvent.type: String`**  
事件类型

**`abstractEvent.cancelable: String`**  
检测事件是否可被取消
