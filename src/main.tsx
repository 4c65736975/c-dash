/**
 * main.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App.tsx";
import OverlaysProvider from "./providers/Overlays.provider.tsx";
import SettingsProvider from "./providers/Settings.provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OverlaysProvider>
      <SettingsProvider>
        <App/>
      </SettingsProvider>
    </OverlaysProvider>
  </React.StrictMode>
);