// 分模块打包配置
const bundles = [
  {
    name: 'Draggable',
    filename: 'draggable.bundle',
    source: 'index',
  },

  {
    name: 'Draggable',
    filename: 'draggable.bundle.legacy',
    source: 'index.legacy',
  },

  {
    name: 'Draggable',
    filename: 'draggable',
    source: 'Draggable/index',
  },

  {
    name: 'Sortable',
    filename: 'sortable',
    source: 'Sortable/index',
  },

  {
    name: 'Swappable',
    filename: 'swappable',
    source: 'Swappable/index',
  },

  {
    name: 'Droppable',
    filename: 'droppable',
    source: 'Droppable/index',
  },

  {
    name: 'Plugins',
    filename: 'plugins',
    source: 'Plugins/index',
  },

  {
    name: 'Collidable',
    filename: 'collidable',
    source: 'Plugins/Collidable/index',
    path: 'plugins/',
  },

  {
    name: 'ResizeMirror',
    filename: 'resize-mirror',
    source: 'Plugins/ResizeMirror/index',
    path: 'plugins/',
  },

  {
    name: 'Snappable',
    filename: 'snappable',
    source: 'Plugins/Snappable/index',
    path: 'plugins/',
  },

  {
    name: 'SwapAnimation',
    filename: 'swap-animation',
    source: 'Plugins/SwapAnimation/index',
    path: 'plugins/',
  },
];

module.exports = {bundles};
