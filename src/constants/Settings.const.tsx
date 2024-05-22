/**
 * Settings.const.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Settings } from "../types/Settings.type";

const SETTING_ID_TO_NAME: { [key: string]: string } = {
  "light": "Light",
  "dark": "Dark",
  "system": "System",
  "celsius": "Celsius °C",
  "fahrenheit": "Fahrenheit °F",
  "kmh": "km/h",
  "ms": "m/s",
  "mph": "mph",
  "knots": "knots",
  "millimeter": "millimeter",
  "inch": "inch"
};

const SETTING_OPTIONS: { [key: string]: string[] } = {
  THEME: ["light", "dark", "system"],
  TEMP: ["celsius", "fahrenheit"],
  WIND_SPEED: ["kmh", "ms", "mph", "knots"],
  PRECIPITATION: ["millimeter", "inch"]
};

const DEFAULT_SETTINGS: Settings = {
  theme: {
    id: "theme-setting",
    value: "dark"
  },
  tempUnit: {
    id: "temp-unit-setting",
    value: "celsius"
  },
  windUnit: {
    id: "wind-unit-setting",
    value: "kmh"
  },
  precipitationUnit: {
    id: "precipitation-unit-setting",
    value: "millimeter"
  },
  alignment: {
    id: "alignment-setting",
    value: true
  },
  guidanceLines: {
    id: "guidanceLines-setting",
    value: false
  },
  spacing: {
    id: "spacing-setting",
    value: 20
  }
};

export {
  DEFAULT_SETTINGS,
  SETTING_ID_TO_NAME,
  SETTING_OPTIONS
};