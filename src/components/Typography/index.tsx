import type { AriaRole, PropsWithChildren } from "react"

import "./styles.css"

enum TypographyVariantEnum {
    'paragraph-xsmall-regular' = 'paragraph-xsmall-regular',
    'paragraph-sm-regular' = 'paragraph-sm-regular',
    'paragraph-sm-regular-erased' = 'paragraph-sm-regular-erased',
    'paragraph-sm-medium' = 'paragraph-sm-medium',
    'paragraph-lg-regular' = 'paragraph-lg-regular',
    'sr-only' = 'sr-only',
    'subtitle-regular' = 'subtitle-regular',
    'subtitle-medium' = 'subtitle-medium',
    'subtitle-bold' = 'subtitle-bold',
    'title-bold' = 'title-bold',
}

export const TypographyVariant = {
    'paragraph-xsmall-regular': TypographyVariantEnum['paragraph-xsmall-regular'],
    'paragraph-sm-regular': TypographyVariantEnum['paragraph-sm-regular'],
    'paragraph-sm-regular-erased': TypographyVariantEnum['paragraph-sm-regular-erased'],
    'paragraph-sm-medium': TypographyVariantEnum['paragraph-sm-medium'],
    'paragraph-lg-regular': TypographyVariantEnum['paragraph-lg-regular'],
    'sr-only': TypographyVariantEnum['sr-only'],
    'subtitle-regular': TypographyVariantEnum['subtitle-regular'],
    'subtitle-medium': TypographyVariantEnum['subtitle-medium'],
    'subtitle-bold': TypographyVariantEnum['subtitle-bold'],
    'title-bold': TypographyVariantEnum['title-bold'],
}

type TypographyProps = PropsWithChildren<{
    className?: string
    component?: AriaRole
    variant?: TypographyVariantEnum
}>

export const Typography = ({
    children,
    className = '',
    component = 'p',
    variant = TypographyVariant['paragraph-lg-regular']
}: TypographyProps) => (
    <p role={component} className={`${variant} text-default-style ${className}`}>{children}</p>
)
