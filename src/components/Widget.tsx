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
  Subtitle1,
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
  },
  widgetHeader: {
    width: "max-content",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  widgetTitle: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    fontSize: tokens.fontSizeHero800
  }
});

interface IWidgetHeaderProps {
  children: React.ReactNode;
}

export const WidgetHeader: React.FC<IWidgetHeaderProps> = ({ children }) => {
  const styles = useStyles();

  return (
    <div className={styles.widgetHeader}>
      {children}
    </div>
  );
};

interface IWidgetTitleProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const WidgetTitle: React.FC<IWidgetTitleProps> = ({ icon, children }) => {
  const styles = useStyles();

  return (
    <div className={styles.widgetTitle}>
      {icon}
      {typeof(children) === "string" ? <Subtitle1>{children}</Subtitle1> : children}
    </div>
  );
};

export const WidgetDivider: React.FC = () => {
  const styles = useStyles();

  return <Divider className={styles.widgetDivider}/>;
};

interface IWidgetProps {
  header?: React.ReactNode;
  children: React.ReactNode;
  minWidth?: number;
}

const Widget: React.FC<IWidgetProps> = ({ header, children, minWidth }) => {
  const styles = useStyles();

  return (
    <div style={{ minWidth: minWidth }} className={styles.widgetContainer}>
      {header}
      {children}
    </div>
  );
};

export default Widget;