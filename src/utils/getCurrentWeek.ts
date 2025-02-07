export type Week = Array<{
    date: Date;
    day: number;
    isToday?: boolean;
    name: string;
}>;

const WEEK_DAYS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

export const getCurrentWeek = (): Week => {
    const today = new Date();
    const weekFirstDay = today.setDate(today.getDate() - today.getDay());

    const week = []

    for (let i = 0; i < 7; i++) {
        const firstDayDate = new Date(weekFirstDay);
        firstDayDate.setDate(today.getDate() + i);

        week.push({
            date: firstDayDate,
            day: firstDayDate.getDate(),
            name: WEEK_DAYS[i],
            isToday: today.getDate() === firstDayDate.getDate()
        });
    }

    return week;
}
