import React, { useState, useEffect, useRef } from 'react';
const useInterval = (callback, delay) => {
  const savedCallback = useRef<Function>();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
}, [callback]);
// Set up the interval.
useEffect(() => {
  function tick() {
  savedCallback.current();
  }
  console.log("interval", delay)
  if (delay !== null) {
    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }
}, [delay]);
}
export default useInterval;