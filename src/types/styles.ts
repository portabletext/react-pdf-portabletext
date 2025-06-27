import type { PortableTextProps } from "@portabletext/react"
import type { PortableTextBlock, TypedObject } from "@portabletext/types"
import type { Style } from "@react-pdf/types"

export type TypographyStyles = {
	h1?: Style
	h2?: Style
	h3?: Style
	h4?: Style
	h5?: Style
	h6?: Style
	normal?: Style
	blockquote?: Style
}

export type MarksStyles = {
	strong?: Style
	em?: Style
	link?: Style
	underline?: Style
	"strike-through"?: Style
	code?: Style
	superscript?: Style
	subscript?: Style	
	highlight?: Style
}

export type ListStyles = {
	list?: Style
	listDeep?: Style
	listItemWrapper?: Style
	listItemDecorator?: Style
	listItemNumber?: Style
}

export type PortableTextStyles = {
	block?: TypographyStyles
	text?: TypographyStyles
	marks?: MarksStyles
	list?: ListStyles
	image?: Style
}

export type StyledPortableTextProps<B extends TypedObject = PortableTextBlock> = PortableTextProps<B> & {
	// If "components" prop for a particular selector combination (e.g. "block.normal" or "marks.em") is provided for both "components" and "defaultComponentStyles"
	// the runtime will throw an error (without the error the components prop would take precedence and the result could be confusing to the developer/user)
	defaultComponentStyles?: PortableTextStyles
	baseFontSizePt?: number
}
