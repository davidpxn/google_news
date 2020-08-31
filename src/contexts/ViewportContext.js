
import React, { useState, useEffect } from 'react';


// Constants used to define the the device type.
// Same breakpoints will be used in scss code.

const ViewportBreakpoints = {
  pointPhoneTablet: 700,
  pointTabletDesktop: 1100,
};

const DeviceTypeEnum = {
  MOBILE: 0,
  TABLET: 1,
  DESKTOP: 2,
};
Object.freeze(DeviceTypeEnum);

function WidthToDeviceType(width) {
  if (width < ViewportBreakpoints.pointPhoneTablet) {
    return DeviceTypeEnum.MOBILE;
  } else if (width < ViewportBreakpoints.pointTabletDesktop) {
    return DeviceTypeEnum.TABLET;
  } else {
    return DeviceTypeEnum.DESKTOP;
  }
}


// Context and provider to keep track of the device size

const ViewportContext = React.createContext({
  deviceType: DeviceTypeEnum.MOBILE,
  width: 0,
  height: 0,
});

function ViewportProvider(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [deviceType, setDeviceType] = useState(WidthToDeviceType(width));

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setDeviceType(WidthToDeviceType(width));
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return (
    <ViewportContext.Provider value={{ deviceType, width, height }}>
      {props.children}
    </ViewportContext.Provider>
  );
}


export default ViewportContext;
export { ViewportProvider, DeviceTypeEnum };