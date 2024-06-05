/**
 * Weather.type.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { FluentIcon } from "@fluentui/react-icons";

export type TWeatherIcons = {
  [key: number]: FluentIcon
};
export type TWeatherNames = {
  [key: number]: string
};

export interface IWeatherCurrentUnits {
  cloud_cover: string;
  interval: string;
  precipitation: string;
  relative_humidity_2m: string;
  surface_pressure: string;
  temperature_2m: string;
  time: string;
  weather_code: string;
  wind_direction_10m: string;
  wind_speed_10m: string;
}

export interface IWeatherCurrent {
  cloud_cover: number;
  interval: number;
  precipitation: number;
  relative_humidity_2m: number;
  surface_pressure: number;
  temperature_2m: number;
  time: string;
  weather_code: number;
  wind_direction_10m: number;
  wind_speed_10m: number;
}

export interface IWeatherDailyUnits {
  temperature_2m_max: string;
  time: string;
  weather_code: string;
}

export interface IWeatherDaily {
  temperature_2m_max: number[];
  time: string[];
  weather_code: number[];
}

export interface IWeather {
  timezone: string;
  timezone_abbreviation: string;
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  elevation: number;
  current: IWeatherCurrent;
  current_units: IWeatherCurrentUnits;
  daily: IWeatherDaily;
  daily_units: IWeatherDailyUnits;
}