const FORMAT_OPTIONS = {
    'DD/MM/YYYY': {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        timeZone: 'UTC'
    } as const,
};

type FormatOptions = 'DD/MM/YYYY'

const formatDate = (date: Date, model: FormatOptions = 'DD/MM/YYYY') => {
    const formatOptions = FORMAT_OPTIONS[model] ?? FORMAT_OPTIONS['DD/MM/YYYY']

    const formattedDate = new Intl.DateTimeFormat('pt-BR', formatOptions).format(date);
    return formattedDate;
};

export const dateHandler = (date?: Date | string) => ({
    format: (model?: FormatOptions) => {
        const dateValue = date || new Date();
        const normalizedDate = new Date(dateValue);
        return formatDate(normalizedDate, model);
    },
});
