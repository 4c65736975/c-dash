/**
 * Weather.const.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  CloudyRegular,
  CloudySunRegular,
  DrizzleRegular,
  FogRegular,
  HailMixedRegular,
  HailRegular,
  OvercastRegular,
  RainRegular,
  ShowersHeavyRegular,
  ShowersRegular,
  SleetRegular,
  SnowRegular,
  SunnyRegular,
  ThunderstormRegular
} from "../components/icons";
import {
  TWeatherIcons,
  TWeatherNames
} from "../types/Weather.type";

const WMO_CODE_TO_ICON: TWeatherIcons = {
  0: SunnyRegular,
  1: CloudySunRegular,
  2: CloudyRegular,
  3: OvercastRegular,
  45: FogRegular,
  48: FogRegular,
  51: DrizzleRegular,
  53: DrizzleRegular,
  55: DrizzleRegular,
  56: SleetRegular,
  57: SleetRegular,
  61: RainRegular,
  63: RainRegular,
  65: RainRegular,
  66: SleetRegular,
  67: SleetRegular,
  71: SnowRegular,
  73: SnowRegular,
  75: SnowRegular,
  77: SnowRegular,
  80: ShowersRegular,
  81: ShowersRegular,
  82: ShowersHeavyRegular,
  85: SnowRegular,
  86: SnowRegular,
  95: ThunderstormRegular,
  96: HailRegular,
  99: HailMixedRegular
};

const WMO_CODE_TO_NAME: TWeatherNames = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Rime fog",
  51: "Drizzle light",
  53: "Drizzle moderate",
  55: "Drizzle dense",
  56: "Freezing drizzle",
  57: "Freezing drizzle",
  61: "Rain slight",
  63: "Rain moderate",
  65: "Rain heavy",
  66: "Freezing rain",
  67: "Freezing rain",
  71: "Snow slight",
  73: "Snow moderate",
  75: "Snow heavy",
  77: "Snow grains",
  80: "Showers slight",
  81: "Showers moderate",
  82: "Showers violent",
  85: "Snow showers",
  86: "Snow showers",
  95: "Thunderstorm",
  96: "Hail slight",
  99: "Hail heavy"
};

export {
  WMO_CODE_TO_ICON,
  WMO_CODE_TO_NAME
};