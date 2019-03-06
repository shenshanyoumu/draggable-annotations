[![CircleCI](https://circleci.com/gh/Shopify/draggable/tree/master.svg?style=shield)](https://circleci.com/gh/Shopify/draggable/tree/master)
[![npm version](https://badge.fury.io/js/%40shopify%2Fdraggable.svg)](https://badge.fury.io/js/%40shopify%2Fdraggable)
[![codecov](https://codecov.io/gh/Shopify/draggable/branch/master/graph/badge.svg)](https://codecov.io/gh/Shopify/draggable)
[![Greenkeeper badge](https://badges.greenkeeper.io/Shopify/draggable.svg)](https://greenkeeper.io/)

<a href="https://shopify.github.io/draggable" title="Visit Draggable website">
  <img src="https://user-images.githubusercontent.com/643944/35602291-99e2c56e-0605-11e8-847f-95f1f6be1610.jpg" alt="">
</a>

> **Currently in beta!** 目前版本为 Beta 版，因此 API 还会发生变化。因此当该拖拽库版本升级时，请查看更新日志

基于 Draggable 库可以获得对拖拽行为的完全控制，Draggable 库将具体的浏览器事件行为抽象为一组 API 调用。
`Draggable` 库伴随着 `Sortable`, `Droppable`, `Swappable`等库发布. Draggable 库在发生拖拽行为时并不会进行排序操作，但是可以通过事件机制来通知 Sortable 库的行为

**特性**

- 基于本地的拖拽、鼠标动作、触控行为构建
- 可以通过注入拖拽生命周期钩子事件来扩展拖拽行为
- 可以通过对可拖拽元素添加传感器来扩展拖拽检测能力
- The library is targeted ES6 first

## 目录

- [安装](#install)
- [文档](#documentation)
- [源码贡献](#contributing)
- [路线图](#roadmap)
- [版权](#copyright)

## 安装

基于 npm 安装

```
npm install @shopify/draggable --save
```

或者基于 yarn 安装:

```
yarn add @shopify/draggable
```

或者基于 CDN 安装

```html
<!-- Entire bundle -->
<script src="https://cdn.jsdelivr.net/npm/@shopify/draggable@1.0.0-beta.8/lib/draggable.bundle.js"></script>
<!-- legacy bundle for older browsers (IE11) -->
<script src="https://cdn.jsdelivr.net/npm/@shopify/draggable@1.0.0-beta.8/lib/draggable.bundle.legacy.js"></script>
<!-- Draggable only -->
<script src="https://cdn.jsdelivr.net/npm/@shopify/draggable@1.0.0-beta.8/lib/draggable.js"></script>
<!-- Sortable only -->
<script src="https://cdn.jsdelivr.net/npm/@shopify/draggable@1.0.0-beta.8/lib/sortable.js"></script>
<!-- Droppable only -->
<script src="https://cdn.jsdelivr.net/npm/@shopify/draggable@1.0.0-beta.8/lib/droppable.js"></script>
<!-- Swappable only -->
<script src="https://cdn.jsdelivr.net/npm/@shopify/draggable@1.0.0-beta.8/lib/swappable.js"></script>
<!-- Plugins only -->
<script src="https://cdn.jsdelivr.net/npm/@shopify/draggable@1.0.0-beta.8/lib/plugins.js"></script>
```

## 浏览器兼容性检测

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Latest ✔                                                                                 | Latest ✔                                                                                    | 11+ ✔                                                                                                                        | Latest ✔                                                                              | Latest ✔                                                                                 | Latest ✔                                                                           |

## 打包大小

| 包名                       | ES6 打包大小 | ES5 打包大小 |
| -------------------------- | ------------ | ------------ |
| draggable.bundle.js        | ~11kb        | ~19.2kb      |
| draggable.bundle.legacy.js | ~19.2kb      | ~25.63kb     |
| draggable.js               | ~8.06kb      | ~15.36kb     |
| sortable.js                | ~8.93kb      | ~16.51kb     |
| swappable.js               | ~8.56kb      | ~16.14kb     |
| droppable.js               | ~8.8kb       | ~16.55kb     |
| plugins.js                 | ~2.37kb      | ~8.76kb      |
| plugins/collidable.js      | ~1.45kb      | ~7.81kb      |
| plugins/snappable.js       | ~1.19kb      | ~6.94kb      |
| plugins/swap-animation.js  | ~1kb         | ~6.65kb      |

## 文档

下面分模块查看文档

- [Draggable](src/Draggable)
  - [DragEvent](src/Draggable/DragEvent)
  - [DraggableEvent](src/Draggable/DraggableEvent)
  - [Plugins](src/Draggable/Plugins)
    - [Announcement](src/Draggable/Plugins/Announcement)
    - [Focusable](src/Draggable/Plugins/Focusable)
    - [Mirror](src/Draggable/Plugins/Mirror)
    - [MirrorEvent](src/Draggable/Plugins/Mirror/MirrorEvent)
    - [Scrollable](src/Draggable/Plugins/Scrollable)
  - [Sensors](src/Draggable/Sensors)
    - [DragSensor](src/Draggable/Sensors/DragSensor)
    - [ForceTouchSensor](src/Draggable/Sensors/ForceTouchSensor)
    - [MouseSensor](src/Draggable/Sensors/MouseSensor)
    - [Sensor](src/Draggable/Sensors/Sensor)
    - [SensorEvent](src/Draggable/Sensors/SensorEvent)
    - [TouchSensor](src/Draggable/Sensors/TouchSensor)
- [Droppable](src/Droppable)
  - [DroppableEvent](src/Droppable/DroppableEvent)
- [Plugins](src/Plugins)
  - [Collidable](src/Plugins/Collidable)
  - [ResizeMirror](src/Plugins/ResizeMirror)
  - [Snappable](src/Plugins/Snappable)
  - [SwapAnimation](src/Plugins/SwapAnimation)
- [Sortable](src/Sortable)
  - [SortableEvent](src/Sortable/SortableEvent)
- [Swappable](src/Swappable)
  - [SwappableEvent](src/Swappable/SwappableEvent)

## 运行例子

为了在本地运行 `examples` 项目，只需要在项目根目录下执行命令:

```
yarn && yarn start
```

将会启动一个托管 `examples/`目录的 Web 服务器，并且可观察 `src/` 和 `examples/src` 目录下内容的变化，从而进行热加载

## Contributing

Contributions are more than welcome, the code base is still new and needs more love.

For more information, please checkout the [contributing document](https://github.com/Shopify/draggable/blob/master/CONTRIBUTING.md).

## Roadmap

We are currently working on `v1.0.0-beta.8`. Check out the [project board](https://github.com/Shopify/draggable/projects/3) to see tasks and follow progress on the release. Any Pull Requests should be pointed against the feature branch `v1.0.0-beta.8`.

## Related resources

- [Ember CLI Shim](https://github.com/timrourke/ember-cli-shopify-draggable-shim) on Github by [@timrourke](https://github.com/timrourke)
- [Ember CLI Shim](https://www.npmjs.com/package/ember-cli-shopify-draggable-shim) on NPM by [@timrourke](https://github.com/timrourke)

## Copyright

Copyright (c) 2018 Shopify. See LICENSE.md for further details.
