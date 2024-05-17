/**
 * App.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Button,
  Tooltip,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { SettingsRegular } from "@fluentui/react-icons";
import { useSettings } from "./hooks";
import WidgetsProvider from "./providers/Widgets.provider";

const useStyles = makeStyles({
  main: {
    height: "100vh",
    padding: "50px",
  },
  settingsButton: {
    position: "absolute",
    top: tokens.spacingVerticalXXL,
    right: `calc(${tokens.spacingHorizontalXXL} - ${tokens.spacingHorizontalS})`,
  }
});

function App() {
  const styles = useStyles();
  const { setIsSettingsOpen } = useSettings();

  return (
    <div className={styles.main}>
      <Tooltip content="Open settings" relationship="label">
        <Button
          size="medium"
          appearance="subtle"
          className={styles.settingsButton}
          icon={<SettingsRegular/>}
          onClick={() => setIsSettingsOpen(true)}/>
      </Tooltip>
      <WidgetsProvider/>
    </div>
  );
}

export default App;