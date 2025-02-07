import type { Week } from "../../../utils/getCurrentWeek";

import { Typography } from "../../Typography";

type TableWeekHeaderProps = {
    weekDays: Week;
};

export const TableWeekHeader = ({ weekDays }: TableWeekHeaderProps) => (
    <thead>
        {weekDays.map(({ day, isToday, name }) => {
            const customStyle = isToday ? {
                color: '#4a87e0'
            } : {};

            return (
                <th key={name} className="calendar-header-cell">
                    <div className="calendar-header-cell-content" style={{ ...customStyle }}>
                        <Typography
                            component="p"
                            variant="paragraph-xsmall-medium"
                        >
                            {day}
                        </Typography>
                        <Typography
                            component="p"
                            variant="paragraph-xsmall-medium"
                        >
                            {name}
                        </Typography>
                    </div>
                </th>
            );
        })}
    </thead >
);