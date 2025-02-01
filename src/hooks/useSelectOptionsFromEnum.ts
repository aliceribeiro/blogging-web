import { useMemo } from "react";

export const useSelectOptionsFromEnum = <T extends Record<string, string>>(enumObj: T) => {
    return (
        useMemo(() => (
            Object.entries(enumObj).map(([value, label]) => ({
                label,
                value
            }))
        ), [enumObj])
    )
}