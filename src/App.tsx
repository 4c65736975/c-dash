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
import { DndContext } from "@dnd-kit/core";

import WidgetsProvider from "./providers/Widgets.provider.tsx";
import { useOverlays } from "./hooks";

const useStyles = makeStyles({
  main: {
    height: "100vh",
    padding: "50px",
    boxSizing: "border-box"
  },
  settingsButton: {
    position: "absolute",
    top: tokens.spacingVerticalXXL,
    right: `calc(${tokens.spacingHorizontalXXL} - ${tokens.spacingHorizontalS})`,
  }
});

function App() {
  const styles = useStyles();
  const { setIsSettingsOpen } = useOverlays();

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
      <DndContext>
        <WidgetsProvider/>
      </DndContext>
    </div>
  );
}

export default App;