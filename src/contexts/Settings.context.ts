/**
 * SettingsContext.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import { Settings } from "../types/Settings.type";

export type ISettingsContext = {
  settings: Settings;
  updateSetting: (id: string, value: Settings[keyof Settings]["value"]) => void;
};

const SettingsContext = React.createContext<ISettingsContext | null>(null);

SettingsContext.displayName = "Settings";

export default SettingsContext;