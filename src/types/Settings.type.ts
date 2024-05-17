/**
 * Settings.type.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type Setting<T> = {
  id: string;
  value: T;
};

export type Settings = {
  theme: Setting<ThemeSetting>;
  tempUnit: Setting<TempUnitSetting>;
  windUnit: Setting<WindUnitSetting>;
  precipitationUnit: Setting<PrecipitationSetting>;
  alignment: Setting<AlignmentSetting>;
  guidanceLines: Setting<GuidanceLinesSetting>;
  spacing: Setting<SpacingSetting>;
};

export type ThemeSetting = "light" | "dark" | "system";
export type TempUnitSetting = "celsius" | "fahrenheit";
export type WindUnitSetting = "kmh" | "ms" | "mph" | "knots";
export type PrecipitationSetting = "millimeter" | "inch";
export type AlignmentSetting = boolean;
export type GuidanceLinesSetting = boolean;
export type SpacingSetting = number;