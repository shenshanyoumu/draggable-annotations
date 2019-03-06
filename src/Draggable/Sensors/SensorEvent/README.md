## 传感器事件

传感器触发的事件基类.

|                   |               |
| ----------------- | ------------- |
| **Interface**     | `SensorEvent` |
| **Cancelable**    | false         |
| **Cancel action** | -             |
| **type**          | `sensor`      |

### API

**`sensorEvent.originalEvent: Event`**  
触发传感事件的运行时原生事件.

**`sensorEvent.clientX: Number`**  
事件对象携带的坐标信息，整合了触控和鼠标.

**`sensorEvent.clientY: Number`**  
事件对象携带的坐标信息，整合了触控和鼠标.

**`sensorEvent.target: HTMLElement`**  
触发事件的 DOM 元素

**`sensorEvent.container: Number`**  
触发传感事件的容器

**`sensorEvent.pressure: Number`**  
压力传感

## DragStartSensorEvent

`DragStartSensorEvent` 拖拽开始触发.

|                   |                        |
| ----------------- | ---------------------- |
| **Specification** | `SensorEvent`          |
| **Interface**     | `DragStartSensorEvent` |
| **Cancelable**    | true                   |
| **Cancel action** | Prevents drag start    |
| **type**          | `drag:start`           |

## DragMoveSensorEvent

`DragMoveSensorEvent` 拖拽过程中

|                   |                       |
| ----------------- | --------------------- |
| **Specification** | `SensorEvent`         |
| **Interface**     | `DragMoveSensorEvent` |
| **Cancelable**    | false                 |
| **Cancel action** | -                     |
| **type**          | `drag:move`           |

## DragStopSensorEvent

`DragStopSensorEvent` 拖拽停止触发

|                   |                       |
| ----------------- | --------------------- |
| **Specification** | `SensorEvent`         |
| **Interface**     | `DragStopSensorEvent` |
| **Cancelable**    | false                 |
| **Cancel action** | -                     |
| **type**          | `drag:stop`           |

## DragPressureSensorEvent

`DragPressureSensorEvent`拖拽拾取和拖拽释放

|                   |                           |
| ----------------- | ------------------------- |
| **Specification** | `SensorEvent`             |
| **Interface**     | `DragPressureSensorEvent` |
| **Cancelable**    | false                     |
| **Cancel action** | -                         |
| **type**          | `drag:pressure`           |
