/**
 * Settings.provider.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import {
  Button,
  Divider,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Dropdown,
  Label,
  Link,
  Option,
  OverlayDrawer,
  SpinButton,
  Subtitle2,
  Switch,
  Tooltip,
  makeStyles,
  tokens,
  useId
} from "@fluentui/react-components";
import { DismissRegular } from "@fluentui/react-icons";

import FluentProvider from "./Fluent.provider";
import SettingsContext from "../contexts/Settings.context";
import {
  SETTING_ID_TO_NAME,
  SETTING_OPTIONS,
  DEFAULT_SETTINGS
} from "../constants/Settings.const";
import {
  Settings,
  ThemeSetting,
  SpacingSetting,
  TempUnitSetting,
  WindUnitSetting,
  PrecipitationSetting
} from "../types/Settings.type";
import {
  useOverlays,
  useSettings
} from "../hooks";

const useStyles = makeStyles({
  settingsSection: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXL
  },
  settingsSectionContainer: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL
  },
  settingsItemContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  settingsHeader: {
    padding: "initial",
    gap: "initial"
  },
  settingsHeaderTitle: {
    padding: tokens.spacingVerticalXXL
  },
  settingsDivider: {
    paddingLeft: tokens.spacingVerticalXXL
  },
  settingsContainer: {
    display: "flex",
    flexDirection: "column",
    flex: "initial",
    marginTop: tokens.spacingVerticalXXXL,
    gap: tokens.spacingVerticalXXXL
  }
});

interface ISettingsItemProps {
  children: React.ReactNode;
}

const SettingsItem: React.FC<ISettingsItemProps> = ({ children }) => {
  const styles = useStyles();

  return (
    <div className={styles.settingsItemContainer}>
      {children}
    </div>
  );
};

interface ISettingsSectionProps {
  title: string;
  children: React.ReactNode;
}

const SettingsSection: React.FC<ISettingsSectionProps> = ({ title, children }) => {
  const styles = useStyles();

  return (
    <div className={styles.settingsSection}>
      <Subtitle2>{title}</Subtitle2>
      <div className={styles.settingsSectionContainer}>{children}</div>
    </div>
  );
};

const SettingsOverlay: React.FC = () => {
  const styles = useStyles();
  const { settings, updateSetting } = useSettings();
  const { isSettingsOpen, setIsSettingsOpen, setIsWidgetsGalleryOpen } = useOverlays();
  // Labels id
  const themeId = useId(settings.theme.id);
  const tempId = useId(settings.tempUnit.id);
  const windId = useId(settings.windUnit.id);
  const precipitationId = useId(settings.precipitationUnit.id);
  const alignmentId = useId(settings.alignment.id);
  const guidanceLinesId = useId(settings.guidanceLines.id);
  const spacingId = useId(settings.spacing.id);
  const galleryId = useId();

  return (
    <OverlayDrawer
      open={isSettingsOpen}
      position="end"
      modalType="non-modal"
      style={{ width: "360px" }}
      onOpenChange={(_, { open }) => setIsSettingsOpen(open)}>
      <DrawerHeader className={styles.settingsHeader}>
        <DrawerHeaderTitle
          className={styles.settingsHeaderTitle}
          action={
            <Tooltip
              content="Close settings"
              relationship="label">
              <Button
                aria-label="Close"
                appearance="subtle"
                icon={<DismissRegular/>}
                onClick={() => setIsSettingsOpen(false)}/>
            </Tooltip>
          }>
          Settings
        </DrawerHeaderTitle>
        <Divider className={styles.settingsDivider}/>
      </DrawerHeader>
      <DrawerBody className={styles.settingsContainer}>
        <SettingsSection title="General">
          <SettingsItem>
            <Label id={themeId}>Theme</Label>
            <Dropdown
              aria-labelledby={themeId}
              style={{ minWidth: "140px" }}
              defaultValue={SETTING_ID_TO_NAME[settings.theme.value]}
              defaultSelectedOptions={[settings.theme.value]}
              onOptionSelect={(_, data) => updateSetting(settings.theme.id, data.optionValue as ThemeSetting)}>
              {SETTING_OPTIONS.THEME.map((option) => (
                <Option key={option} value={option}>
                  {SETTING_ID_TO_NAME[option]}
                </Option>
              ))}
            </Dropdown>
          </SettingsItem>
        </SettingsSection>
        <SettingsSection title="Units">
          <SettingsItem>
            <Label id={tempId}>Temperature</Label>
            <Dropdown
              aria-labelledby={tempId}
              style={{ minWidth: "140px" }}
              defaultValue={SETTING_ID_TO_NAME[settings.tempUnit.value]}
              defaultSelectedOptions={[settings.tempUnit.value]}
              onOptionSelect={(_, data) => updateSetting(settings.tempUnit.id, data.optionValue as TempUnitSetting)}>
              {SETTING_OPTIONS.TEMP.map((option) => (
                <Option key={option} value={option}>
                  {SETTING_ID_TO_NAME[option]}
                </Option>
              ))}
            </Dropdown>
          </SettingsItem>
          <SettingsItem>
            <Label id={windId}>Wind Speed</Label>
            <Dropdown
              aria-labelledby={windId}
              style={{ minWidth: "140px" }}
              defaultValue={SETTING_ID_TO_NAME[settings.windUnit.value]}
              defaultSelectedOptions={[settings.windUnit.value]}
              onOptionSelect={(_, data) => updateSetting(settings.windUnit.id, data.optionValue as WindUnitSetting)}>
              {SETTING_OPTIONS.WIND_SPEED.map((option) => (
                <Option key={option} value={option}>
                  {SETTING_ID_TO_NAME[option]}
                </Option>
              ))}
            </Dropdown>
          </SettingsItem>
          <SettingsItem>
            <Label id={precipitationId}>Precipitation</Label>
            <Dropdown
              aria-labelledby={precipitationId}
              style={{ minWidth: "140px" }}
              defaultValue={SETTING_ID_TO_NAME[settings.precipitationUnit.value]}
              defaultSelectedOptions={[settings.precipitationUnit.value]}
              onOptionSelect={(_, data) => updateSetting(settings.precipitationUnit.id, data.optionValue as PrecipitationSetting)}>
              {SETTING_OPTIONS.PRECIPITATION.map((option) => (
                <Option key={option} value={option}>
                  {SETTING_ID_TO_NAME[option]}
                </Option>
              ))}
            </Dropdown>
          </SettingsItem>
        </SettingsSection>
        <SettingsSection title="Widgets">
          <SettingsItem>
            <Label id={galleryId}>Gallery</Label>
            <Button
              id={galleryId}
              appearance="primary"
              onClick={() => setIsWidgetsGalleryOpen(true)}>
              Open
            </Button>
          </SettingsItem>
          <SettingsItem>
            <Label id={alignmentId}>Alignment</Label>
            <Switch
              id={alignmentId}
              defaultChecked={settings.alignment.value}
              onChange={(_, data) => updateSetting(settings.alignment.id, data.checked)}/>
          </SettingsItem>
          <SettingsItem>
            <Label id={guidanceLinesId}>Guidance Lines</Label>
            <Switch
              id={guidanceLinesId}
              defaultChecked={settings.guidanceLines.value}
              onChange={(_, data) => updateSetting(settings.guidanceLines.id, data.checked)}/>
          </SettingsItem>
          <SettingsItem>
            <Label
              id={spacingId}
              disabled={!settings.alignment.value}>
              Spacing
            </Label>
            <SpinButton
              id={spacingId}
              min={0}
              max={50}
              style={{ maxWidth: "140px" }}
              defaultValue={settings.spacing.value}
              disabled={!settings.alignment.value}
              onChange={(_, data) => updateSetting(settings.spacing.id, data.value as SpacingSetting)}/>
          </SettingsItem>
        </SettingsSection>
        <SettingsSection title="About">
          <Link href="https://github.com/4c65736975/c-dash/issues">
            Report a issue
          </Link>
          <Link href="https://github.com/4c65736975/c-dash/issues">
            Suggest a feature
          </Link>
          <Link href="https://github.com/4c65736975/c-dash">
            Third party notice
          </Link>
        </SettingsSection>
      </DrawerBody>
    </OverlayDrawer>
  );
};

interface ISettingsProviderProps {
  children?: React.ReactNode;
}

const SettingsProvider: React.FC<ISettingsProviderProps> = ({ children }) => {
  const [settings, setSettings] = React.useState<Settings>(DEFAULT_SETTINGS);

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

  return (
    <SettingsContext.Provider value={{
      settings: settings,
      updateSetting: updateSetting
    }}>
      <FluentProvider>
        {children}
        <SettingsOverlay/>
      </FluentProvider>
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;