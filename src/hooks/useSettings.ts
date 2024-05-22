/**
 * useSettings.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import SettingsContext, { ISettingsContext } from "../contexts/Settings.context";

const useSettings = (): ISettingsContext => {
  const context = React.useContext(SettingsContext);

  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }

  return context;
};

export default useSettings;