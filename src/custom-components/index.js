/* Automatically generated by './build/bin/build-entry.js' */

import MarkPicture from './mark-picture/index.js';
import CanvasDraw from './canvas-draw/index.js';
import CountDown from './count-down/index.js';
import CustomTable from './custom-table/index.js';
// import DateRangePicker from './date-range-picker/index.js';
// import Map3d from './map3d/index.js';
// import Map3dPointer from './map3d-pointer/index.js';
// import Map2d from './map2d/index.js';
// import Map2dPointer from './map2d-pointer/index.js';
import RealtimeVideo from './realtime-video/index.js';
import ScaleBox from './scale-box/index.js';
// import TimeRangePicker from './time-range-picker/index.js';
import VideoPlayer from './video-player/index.js';

const components = [
  MarkPicture,
  CanvasDraw,
  CountDown,
  CustomTable,
  // DateRangePicker,
  // Map3d,
  // Map3dPointer,
  // Map2d,
  // Map2dPointer,
  RealtimeVideo,
  ScaleBox,
  // TimeRangePicker,
  VideoPlayer
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  version: '1.0.0',
  install,
  // AlarmPicture,
  // CanvasDraw,
  // CountDown,
  // CustomTable,
  // DateRangePicker,
  // Map3d,
  // Map3dPointer,
  // Map2d,
  // Map2dPointer,
  // RealtimeVideo,
  // ScaleBox,
  // TimeRangePicker,
  // VideoPlayer
}