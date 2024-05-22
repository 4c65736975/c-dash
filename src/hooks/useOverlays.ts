/**
 * useOverlays.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import OverlaysContext, { IOverlaysContext } from "../contexts/Overlays.context";

const useOverlays = (): IOverlaysContext => {
  const context = React.useContext(OverlaysContext);

  if (!context) {
    throw new Error("useOverlays must be used within a OverlaysProvider");
  }

  return context;
};

export default useOverlays;