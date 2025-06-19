import type { PortableTextComponent, PortableTextComponentProps } from "@portabletext/react"
import type { PortableTextBlock } from "@portabletext/types"
import { Text, View } from "@react-pdf/renderer"
import type { PortableTextStyles } from "../types/styles"
import { mergeStyles } from "../utils/mergeStyles"
import { defaultStylesFactory } from "./styles"

export const defaultBlockFactory: PortableTextComponent<PortableTextBlock> = (styles: PortableTextStyles, baseFontSizePt: number) => {
	const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSizePt), styles)

	return (props: PortableTextComponentProps<PortableTextBlock>) => {
		const { children, value: block } = props
		type StyleKey = keyof typeof mergedStyles.block
		const styleKey = (block.style || "normal") as StyleKey
		const blockStyles = mergedStyles.block || {}
		const textStyles = mergedStyles.text || {}

		return (
			<View key={block._key} style={blockStyles[styleKey]}>
				<Text style={textStyles[styleKey]}>{children}</Text>
			</View>
		)
	}
}
