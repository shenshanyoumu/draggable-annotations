## 插件基类

Draggable 库基于插件系统构建，所谓插件其实就是一个实现了 API 接口契约的函数。

### API

**`new AbstractPlugin(draggable: Draggable): AbstractPlugin`**  
创建 `AbstractPlugin`实例.

**`abstractEvent.attach(): void`**  
为插件绑定事件监听器.

**`abstractEvent.detach(): void`**  
将事件监听器与插件进行分离
