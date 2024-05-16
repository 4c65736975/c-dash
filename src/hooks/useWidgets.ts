/**
 * useWidgets.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import WidgetsContext, { TWidgetsContext } from "../contexts/Widgets.context";

const useWidgets = (): TWidgetsContext => {
  const context = React.useContext(WidgetsContext);

  if (!context) {
    throw new Error("useWidgets must be used within a WidgetsProvider");
  }

  return context;
};

export default useWidgets;