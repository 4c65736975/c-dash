/**
 * Settings.provider.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import SettingsContext from "../contexts/Settings.context";
import { Settings } from "../types/Settings.type";

const defaultSettings: Settings= {
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

const SettingsProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [isSettingsOpen, setIsOpen] = React.useState(false);
  const [settings, setSettings] = React.useState<Settings>(defaultSettings);

  React.useEffect(() => {
    const storedSettings = localStorage.getItem("settings");

    if (storedSettings) {
      const parsedSettings = JSON.parse(storedSettings);

      if (parsedSettings) {
        setSettings(parsedSettings);
      }
    }
  }, []);

  const updateSetting = (id: string, value: Settings[keyof Settings]["value"]) => {
    setSettings(prevSettings => {
      const updatedSettings = {...prevSettings};
      const settingToUpdate = Object.values(updatedSettings).find(setting => setting.id === id);

      if (settingToUpdate) {
        settingToUpdate.value = value;
      }

      return updatedSettings;
    });

    localStorage.setItem("settings", JSON.stringify(settings));
  };

  const setIsSettingsOpen = (state: boolean) => {
    setIsOpen(state);
  };

  return <SettingsContext.Provider value={{ settings, updateSetting, isSettingsOpen, setIsSettingsOpen }}>{children}</SettingsContext.Provider>;
};

export default SettingsProvider;