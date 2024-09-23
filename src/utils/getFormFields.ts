export const getFormFields = <T extends Record<string, any>>(schema: T) => (
    Object.keys(schema).reduce<Record<keyof T, any>>(
        (acc, current) => ({ ...acc, [current]: current }),
        {} as Record<keyof T, any>,
    )
);