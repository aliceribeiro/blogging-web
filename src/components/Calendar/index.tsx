import type { EventsResponse } from "../../api";
import type { Week } from "../../utils/getCurrentWeek";

import { Typography } from "../Typography";
import { getCurrentMonthName } from "../../utils/getCurrentMonth";
import { getCurrentWeek } from "../../utils/getCurrentWeek";

import { TableWeekBody } from "./TableWeekBody";
import { TableWeekHeader } from "./TableWeekHeader";

import "./styles.css";

const mock = [{
    id: '1',
    createdAt: new Date(),
    createdBy: 'bia',
    endDate: new Date(),
    name: 'Debi tirar mas fotos de cuando te tuve',
    description: 'BadBunny best disco',
    startDate: new Date(),
    updatedAt: new Date(),
},
{
    id: '1',
    createdAt: new Date('2025-02-02'),
    createdBy: 'bia',
    description: 'BadBunny best disco',
    endDate: new Date(2025, 1, 5),
    name: 'Debi darte mas besos y abrazos las veces que pude',
    startDate: new Date('2025-02-02'),
    updatedAt: new Date('2025-02-03'),
},
{
    id: '1',
    createdAt: new Date('2025-02-02'),
    createdBy: 'bia',
    description: 'BadBunny best disco',
    endDate: new Date(2025, 1, 5),
    name: 'Debi darte mas besos y abrazos las veces que pude',
    startDate: new Date('2025-02-05'),
    updatedAt: new Date('2025-02-03'),
}
]

const getThisWeekEvents = () => {
    const weekFirstDate = new Date(2025, 1, 2);
    const weekLastDate = new Date(2025, 1, 8);

    const result = mock.filter(({ endDate, startDate }) => {
        const isEndingThisWeek = endDate >= weekFirstDate && endDate <= weekLastDate;
        const isStartingThisWeek = startDate >= weekFirstDate && startDate <= weekLastDate;

        return isEndingThisWeek || isStartingThisWeek;
    });

    return result;
};

type MapEventsParams = {
    events: Array<EventsResponse>;
    weekDays: Week;
};

type IsBetweenParams = {
    date: Date;
    endDate: Date;
    startDate: Date;
};

// TODO: Adicionar os dias que nao tem eventos no array e ordenar por ordem cronologia
// 4: []
const addDaysWithoutEvents = (daysWithEvents: Record<number, Array<EventsWithWeekDate>>, allDays: Week)
    : Record<number, Array<EventsWithWeekDate>> => {
    const daysOutOfTheList = allDays.filter((day) => daysWithEvents[day.day])
    console.log(daysWithEvents, allDays);
    console.log(daysOutOfTheList);

    return daysWithEvents;
};

const isBetween = ({ date, endDate, startDate }: IsBetweenParams) => {
    const dateTimestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0).getTime();
    const endTimestamp = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), 0, 0, 0).getTime();
    const startTimestamp = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 0, 0, 0).getTime();

    return dateTimestamp >= startTimestamp && dateTimestamp <= endTimestamp;
};

const groupByDate = (arr: Array<EventsWithWeekDate>): Record<number, Array<EventsWithWeekDate>> =>
    arr.reduce((acc: Record<number, Array<EventsWithWeekDate>>, item) => {
        const key = item.date;

        if (!acc[key]) {
            acc[key] = [];
        };

        acc[key].push(item);

        return acc;
    }, {});

type EventsWithWeekDate = EventsResponse & { date: number };

const mapEvents = ({ events, weekDays }: MapEventsParams): Record<number, EventsWithWeekDate[]> => {
    const result: Array<EventsWithWeekDate> = [];

    events.forEach((item) =>
        weekDays.forEach(({ date }) => {
            const isEndingThisWeek = isBetween({
                date,
                endDate: item.endDate,
                startDate: item.startDate
            });

            if (isEndingThisWeek) {
                result.push({ ...item, date: date.getDate() });
            }
        }));


    const groupedByDate = groupByDate(result);
    const hasAllDaysOnList = Object.keys(groupedByDate).length === weekDays.length;

    return hasAllDaysOnList ? groupedByDate : addDaysWithoutEvents(groupedByDate, weekDays);
};

export const TableWeek = () => {
    const tableMonth = getCurrentMonthName();
    const weekDays = getCurrentWeek();
    const eventsOfThisWeek = getThisWeekEvents();
    const formattedEvents = mapEvents({ events: eventsOfThisWeek, weekDays });

    return (
        <>
            <Typography
                component="h2"
                variant="paragraph-lg-regular"
            >
                {tableMonth}
            </Typography>
            <table>
                <TableWeekHeader weekDays={weekDays} />
                <TableWeekBody rows={formattedEvents} />
            </table>
        </>
    );
};