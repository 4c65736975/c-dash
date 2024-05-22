/**
 * Overlays.provider.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import OverlaysContext from "../contexts/Overlays.context";

interface IOverlaysProviderProps {
  children: React.ReactNode;
}

const OverlaysProvider: React.FC<IOverlaysProviderProps> = ({ children }) => {
  const [isSettingsOpen, setIsSettingsOpen] = React.useState<boolean>(false);
  const [isWidgetsGalleryOpen, setIsWidgetsGalleryOpen] = React.useState<boolean>(false);

  return (
    <OverlaysContext.Provider value={{
      isSettingsOpen: isSettingsOpen,
      setIsSettingsOpen: setIsSettingsOpen,
      isWidgetsGalleryOpen: isWidgetsGalleryOpen,
      setIsWidgetsGalleryOpen: setIsWidgetsGalleryOpen
    }}>
      {children}
    </OverlaysContext.Provider>
  );
};

export default OverlaysProvider;