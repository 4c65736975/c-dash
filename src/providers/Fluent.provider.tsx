/**
 * Fluent.provider.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import {
  FluentProvider,
  FluentProviderProps,
  makeStyles,
  tokens,
  webDarkTheme,
  webLightTheme
} from "@fluentui/react-components";
import { useSettings } from "../hooks";

const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground2
  }
});

const FluentProvider_ovr: React.FC<FluentProviderProps> = (props) => {
  const styles = useStyles();
  const { settings } = useSettings();
  const [theme, setTheme] = React.useState(settings.theme.value === "light" ? webLightTheme : webDarkTheme);

  React.useEffect(() => {
    if (settings.theme.value === "system") {
      const darkThemeMatch = window.matchMedia("(prefers-color-scheme: dark)");

      const matchMediaListener = (e: MediaQueryListEvent) => {
        setTheme(e.matches ? webDarkTheme : webLightTheme);
      };

      darkThemeMatch.addEventListener("change", matchMediaListener);

      setTheme(darkThemeMatch.matches ? webDarkTheme : webLightTheme);

      return () => {
        darkThemeMatch.removeEventListener("change", matchMediaListener);
      };
    } else {
      setTheme(settings.theme.value === "light" ? webLightTheme : webDarkTheme);
    }
  }, [settings.theme.value]);

  return <FluentProvider {...props} theme={theme} className={styles.root}/>;
};

export default FluentProvider_ovr;