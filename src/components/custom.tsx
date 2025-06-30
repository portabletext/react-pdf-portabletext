import type { PortableTextTypeComponentProps } from "@portabletext/react"
import { Image, View } from "@react-pdf/renderer"
import type { PortableTextStyles } from "../types"
import { mergeStyles } from "../utils/mergeStyles"
import { defaultStylesFactory } from "./styles"

export type ImageDefinition = {
	_key: string
	_type: string
	url: string
	src: string
	alt: string
}

export const defaultImageFactory = (styles: PortableTextStyles, baseFontSizePt: number) => {
	const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSizePt), styles)
	return (props: PortableTextTypeComponentProps<ImageDefinition>) => {
		const { value } = props
		const image = value?.url || value?.src || ""

		return <Image key={value?._key} src={image} style={mergedStyles.image} />
	}
}

export const defaultPageBreakFactory = () => {
	return () => {
		return <View break={true} />
	}
}
