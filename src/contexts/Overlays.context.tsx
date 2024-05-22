/**
 * Overlays.context.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

export interface IOverlaysContext {
  isSettingsOpen: boolean;
  setIsSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isWidgetsGalleryOpen: boolean;
  setIsWidgetsGalleryOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OverlaysContext = React.createContext<IOverlaysContext | null>(null);

OverlaysContext.displayName = "Overlays";

export default OverlaysContext;