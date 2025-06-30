import type { PortableTextMarkComponentProps } from "@portabletext/react"
import { Link, Text } from "@react-pdf/renderer"
import type { PortableTextStyles } from "../types"
import { mergeStyles } from "../utils/mergeStyles"
import { defaultStylesFactory } from "./styles"

export type DefaultMarkTypesKey = "em" | "strong" | "code" | "underline" | "strike-through" | "highlight" | "link" | "superscript" | "subscript"

export const defaultLinkFactory = (styles: PortableTextStyles, baseFontSizePt: number, itemType: DefaultMarkTypesKey) => {
	const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSizePt), styles)
	return (props: PortableTextMarkComponentProps) => {
		const { children, value: link } = props
		const marksStyles = mergedStyles?.marks || {}
		return (
			<Link style={marksStyles[itemType]} href={link?.href}>
				{children}
			</Link>
		)
	}
}

export const defaultMarksFactory = (styles: PortableTextStyles, baseFontSizePt: number, itemType: DefaultMarkTypesKey) => {
	const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSizePt), styles)
	return (props: PortableTextMarkComponentProps) => {
		const { children } = props
		const marksStyles = mergedStyles?.marks || {}
		return <Text style={marksStyles[itemType]}>{children}</Text>
	}
}
