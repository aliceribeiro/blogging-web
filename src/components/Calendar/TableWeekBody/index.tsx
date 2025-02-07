import type { EventsResponse } from "../../../api";

import { Typography } from "../../Typography";

type EventsWithWeekDate = EventsResponse & { date: number };

type TableWeekBodyProps = {
  rows: Record<number, Array<EventsWithWeekDate>>;
};

export const TableWeekBody = ({ rows }: TableWeekBodyProps) => {
  const listOfDays = Object.keys(rows);

  return (
    <tbody>
      <tr>
        {listOfDays.map((item) => {
          const events: EventsWithWeekDate[] = rows[Number(item)];

          return (
            <td key={item} className="calendar-day-cell">
              {events?.length ? (
                <>
                  {events.map(({ description, id, name }) => {
                    return (
                      <div key={id}>
                        <Typography
                          component="p"
                          variant="paragraph-xsmall-medium"
                        >
                          {name}
                        </Typography>
                        {description && <hr />}
                        <Typography
                          component="p"
                          variant="paragraph-xsmall-regular"
                        >
                          {description}
                        </Typography>
                      </div>
                    );
                  })}
                </>
              ) : null}
            </td>
          );
        })}
      </tr>
    </tbody>
  );
};
