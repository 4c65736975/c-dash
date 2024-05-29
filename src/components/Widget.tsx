/**
 * Widget.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Divider,
  makeStyles,
  tokens
} from "@fluentui/react-components";

const useStyles = makeStyles({
  widgetContainer: {
    width: "min-content",
    display: "flex",
    flexDirection: "column",
    padding: `${tokens.spacingVerticalL} ${tokens.spacingHorizontalL}`,
    border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}`,
    borderRadius: tokens.borderRadiusXLarge,
    background: tokens.colorNeutralBackground1
  },
  widgetDivider: {
    marginTop: tokens.spacingVerticalL,
    marginBottom: tokens.spacingVerticalL,
    "::after": {
      marginRight: `calc(${tokens.spacingHorizontalL} * -1)`
    }
  }
});

export const WidgetDivider: React.FC = () => {
  const styles = useStyles();

  return <Divider className={styles.widgetDivider}/>;
};

interface IWidgetProps {
  header?: React.ReactNode;
  children: React.ReactNode;
}

const Widget: React.FC<IWidgetProps> = ({ header, children }) => {
  const styles = useStyles();

  return (
    <div className={styles.widgetContainer}>
      {header}
      {children}
    </div>
  );
};

export default Widget;