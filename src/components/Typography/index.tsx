import type { AriaRole, PropsWithChildren } from "react"

const getTypographyVariant = (variant: string): string => {
    switch (variant) {
        case 'paragraph-xsmall-regular':
            return 'fs-6 text fw-normal';
        case 'paragraph-sm-regular':
            return 'fs-5 text fw-normal';
        case 'paragraph-sm-medium':
            return 'fs-4 text fw-medium';
        case 'paragraph-lg-regular':
            return 'fs-4 text fw-normal';
        case 'subtitle-medium':
            return 'fs-3 text fw-medium';
        case 'subtitle-bold':
            return 'fs-3 text fw-semibold';
        case 'title-bold':
            return 'fs-2 text fw-semibold';
        default:
            return 'fs-4 text fw-normal';
    };
}

type TypographyProps = PropsWithChildren<{
    className?: string
    component?: AriaRole
    variant?:
    'paragraph-xsmall-regular' | 'paragraph-sm-regular' | 'paragraph-sm-medium' |
    'paragraph-lg-regular' | 'subtitle-medium' | 'subtitle-bold' | 'title-bold'
}>

export const Typography = ({
    children,
    className = '',
    component = 'p',
    variant = 'paragraph-sm-regular',
}: TypographyProps) => {
    const variantClass = getTypographyVariant(variant)

    return (
        <p role={component} className={`${variantClass} ${className}`}>{children}</p>
    );
};
