// src/utils/deviceUtils.js
export const isIphone = () => {
    return /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  };
  