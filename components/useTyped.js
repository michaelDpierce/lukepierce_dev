// =============================================================================
// Copyright © 2020 Michael Pierce. All rights reserved.
// =============================================================================

import React, { useEffect, useRef } from "react";

import Typed from "typed.js";

const useRerender = () => {
  const [flag, setFlag] = React.useState(true);
  return () => setFlag(!flag);
};

const useTyped = (ref, options) => {
  const instance = useRef(null);
  const rerender = useRerender();

  useEffect(() => {
    if (ref.current === null) return;
    instance.current = new Typed(ref.current, options);
    rerender();
    return () => instance.current.destroy();
  }, [ref]);
  return instance.current;
};

export default useTyped;
