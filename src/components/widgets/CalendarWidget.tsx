/**
 * CalendarWidget.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Body1Strong,
  Caption1,
  makeStyles,
  tokens
} from "@fluentui/react-components";
import { CalendarDateRegular } from "@fluentui/react-icons";

import Widget, {
  WidgetDivider,
  WidgetHeader,
  WidgetTitle
} from "../Widget";
import { TWidgetSize } from "../../types/Widgets.type";
import {
  MONTH_NAME,
  WEEK_DAY_ABBREVIATE_NAME,
  WEEK_DAY_NAME
} from "../../constants/Date.const";

const useStyles = makeStyles({
  daysContainer: {
    display: "grid",
    justifyContent: "space-between",
    gridTemplateColumns: "repeat(7, auto)",
    rowGap: tokens.spacingVerticalL,
    "> *": {
      textAlign: "center"
    }
  },
  currentDay: {
    position: "relative",
    zIndex: 1,
    ":before": {
      content: '""',
      width: "25px",
      height: "25px",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: tokens.colorBrandBackground,
      borderRadius: tokens.borderRadiusCircular,
      zIndex: -1
    }
  },
  disabledDay: {
    color: tokens.colorNeutralBackgroundInvertedDisabled
  }
});

interface IVariantProps {
  date: Date;
}

const Big: React.FC<IVariantProps> = ({ date }) => {
  const styles = useStyles();
  const maxDays = 42;

  const getDays = (): number[] => {
    const days: number[] = [];
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    if (firstDayOfMonth !== 0) {
      const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

      for (let i = 0; i <= firstDayOfMonth - 1; i++) {
        days.unshift(prevMonthDays - i);
      }
    }

    const daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 1; i <= daysInCurrentMonth; i++) {
      days.push(i);
    }

    if (days.length < maxDays) {
      const remainingDays = maxDays - days.length;

      for (let i = 1; i <= remainingDays; i++) {
        days.push(i);
      }
    }

    return days;
  };

  let isCurrentMonth = false;
  const currentMonthDay = date.getDate();

  return (
    <>
      {getDays().map((day, index) => {
        let customClass = "";

        if (day === 1) {
          isCurrentMonth = !isCurrentMonth;
        }

        if (!isCurrentMonth) {
          customClass = styles.disabledDay;
        } else if (currentMonthDay === day) {
          customClass = styles.currentDay;
        }

        return <Caption1 className={customClass} key={index}>{day}</Caption1>;
      })}
    </>
  );
};

const Medium: React.FC<IVariantProps> = ({ date }) => {
  const styles = useStyles();
  const maxDays = 14;
  const currentMonthDay = date.getDate();

  const getDays = (): number[] => {
    const days: number[] = [];
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const currentWeekDay = date.getDay();

    let prevDays = currentWeekDay;

    if (currentWeekDay !== 0) {
      for (let i = currentWeekDay; i >= 1; i--) {
        const day = currentMonthDay - currentWeekDay - 1 + i;

        if (day > 0) {
          days.unshift(day);

          --prevDays;
        }
      }
    }

    if (prevDays !== 0) {
      const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

      for (let i = 0; i <= currentWeekDay - 1; i++) {
        days.unshift(prevMonthDays - i);
      }
    }

    let remainingDays = maxDays - days.length;
    const daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = currentMonthDay, j = 1; j <= remainingDays && i <= daysInCurrentMonth; i++, j++) {
      days.push(i);
    }

    remainingDays = maxDays - days.length;

    if (remainingDays > 0) {
      for (let i = 1; i <= remainingDays; i++) {
        days.push(i);
      }
    }

    return days;
  };

  let isCurrentMonth = true;

  return (
    <>
      {getDays().map((day, index, days) => {
        let customClass = "";

        // if our first day is greater than our current day, it must be the previous month
        if (index === 0) {
          if (day > currentMonthDay) {
            isCurrentMonth = !isCurrentMonth;
          }
        }

        // if our day is less than our previous day, it must be the next month
        if (day < days[index - 1]) {
          isCurrentMonth = !isCurrentMonth;
        }

        if (!isCurrentMonth) {
          customClass = styles.disabledDay;
        } else if (currentMonthDay === day) {
          customClass = styles.currentDay;
        }

        return <Caption1 className={customClass} key={index}>{day}</Caption1>;
      })}
    </>
  );
};

interface ICalendarWidgetProps {
  size?: TWidgetSize;
}

const CalendarWidget: React.FC<ICalendarWidgetProps> = ({ size = "small" }) => {
  const styles = useStyles();
  const currentDate = new Date();

  const getTitle = (): string => {
    let title = "";
    const monthName = MONTH_NAME[currentDate.getMonth()];

    if (size === "small") {
      const weekDayName = WEEK_DAY_NAME[currentDate.getDay()];
      const monthDay = currentDate.getDate();

      title = `${weekDayName}, ${monthDay} ${monthName}`;
    } else {
      const currentYear = currentDate.getFullYear();

      title = `${monthName} ${currentYear}`;
    }

    return title;
  };

  return (
    <Widget minWidth={300} header={
      <>
        <WidgetHeader>
          <WidgetTitle icon={<CalendarDateRegular/>}>
            {getTitle()}
          </WidgetTitle>
        </WidgetHeader>
        {size !== "small" && <WidgetDivider/>}
      </>
    }>
      {size !== "small" &&
        <div className={styles.daysContainer}>
          {WEEK_DAY_ABBREVIATE_NAME.map((day, index) => (
            <Body1Strong key={index}>{day}</Body1Strong>
          ))}
          {size === "medium" && <Medium date={currentDate}/>}
          {size === "big" && <Big date={currentDate}/>}
        </div>
      }
    </Widget>
  );
};

export default CalendarWidget;