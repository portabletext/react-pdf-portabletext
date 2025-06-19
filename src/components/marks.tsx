import type { PortableTextComponent, PortableTextMarkComponent, PortableTextMarkComponentProps } from "@portabletext/react"
import type { PortableTextBlock, PortableTextLink } from "@portabletext/types"
import { Link, Text } from "@react-pdf/renderer"
import type { PortableTextStyles } from "../types/styles"
import { mergeStyles } from "../utils/mergeStyles"
import { defaultStylesFactory } from "./styles"

export const defaultLinkFactory: PortableTextComponent<PortableTextBlock> = (
	styles: PortableTextStyles,
	baseFontSize: number,
	itemType: "em" | "strong" | "code" | "underline" | "strike-through" | "link" | "superscript" | "subscript"
) => {
	const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSize), styles)
	return (props: PortableTextMarkComponentProps<PortableTextLink>) => {
		const { children, value: link } = props
		const marksStyles = mergedStyles?.marks || {}
		return (
			<Link style={marksStyles[itemType]} href={link?.href}>
				{children}
			</Link>
		)
	}
}

export const defaultMarksFactory: PortableTextMarkComponent = (
	styles: PortableTextStyles,
	baseFontSize: number,
	itemType: "em" | "strong" | "code" | "underline" | "strike-through" | "link" | "superscript" | "subscript"
) => {
	const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSize), styles)
	return (props: PortableTextMarkComponentProps) => {
		const { children } = props
		const marksStyles = mergedStyles?.marks || {}
		return <Text style={marksStyles[itemType]}>{children}</Text>
	}
}
