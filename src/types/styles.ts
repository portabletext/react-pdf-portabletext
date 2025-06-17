import type { PortableTextProps } from "@portabletext/react"
import type { PortableTextBlock, TypedObject } from "@portabletext/types"
import type { CSSProperties } from "react"

type TypographyStyles = {
    h1?: CSSProperties,
    h2?: CSSProperties,
    h3?: CSSProperties,
    h4?: CSSProperties,
    h5?: CSSProperties,
    h6?: CSSProperties,
    normal?: CSSProperties,
    blockquote?: CSSProperties
}

type MarksStyles = {
    strong?: CSSProperties,
    em?: CSSProperties,
    link?: CSSProperties,
    underline?: CSSProperties,
    strikethrough?: CSSProperties,
    code?: CSSProperties,
    superscript?: CSSProperties,
    subscript?: CSSProperties,
}

type ListStyles = {
    list?: CSSProperties,
    listDeep?: CSSProperties,
    listItem?: CSSProperties,
    bulletListIcon?: CSSProperties,
    listItemWrapper?: CSSProperties,
}

type UnknownStyles = {
    hardBreak?: CSSProperties,
    unknownType?: CSSProperties,
    unknownMark?: CSSProperties,
    unknownList?: CSSProperties,
    unknownListItem?: CSSProperties,
    unknownBlockStyle?: CSSProperties,
}

export type PortableTextStyles = {
    block?: TypographyStyles,
    text?: TypographyStyles,
    marks?: MarksStyles,
    list?: ListStyles,
    unknown?: UnknownStyles,
}

export type StyledPortableTextProps<B extends TypedObject = PortableTextBlock> = PortableTextProps<B> & {
    // If "components" prop for a particular selector combination (e.g. "block.normal" or "marks.em") is provided for both "components" and "defaultComponentStyles"
    // the runtime will throw an error (without the error the components prop would take precedence and the result could be confusing to the developer/user)
    defaultComponentStyles?: PortableTextStyles
    baseFontSize?: number,
}