import * as React from 'react';

const bgColor = 'white';
const mainColor = '#0a59f8';
const secondColor = '#ff0433';

const rPadding = 15;

const navigationRef = React.createRef();
function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
function back() {
  navigationRef.current?.goBack()
}

export {
  bgColor,
  mainColor,
  secondColor,
  rPadding,
  navigationRef,
  navigate,
  back
}