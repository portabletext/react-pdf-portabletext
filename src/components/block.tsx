import type { PortableTextBlock, PortableTextComponentProps } from "@portabletext/react"
import { Text, View } from "@react-pdf/renderer"
import type { PortableTextStyles } from "../types"
import { mergeStyles } from "../utils/mergeStyles"
import { hardBreak } from "./misc"
import { defaultStylesFactory } from "./styles"

export const defaultBlockFactory = (styles: PortableTextStyles, baseFontSizePt: number) => {
	const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSizePt), styles)

	return (props: PortableTextComponentProps<PortableTextBlock>) => {
		const { children, value: block } = props
		type StyleKey = keyof typeof mergedStyles.block
		const styleKey = (block.style || "normal") as StyleKey
		const blockStyles = mergedStyles.block || {}
		const textStyles = mergedStyles.text || {}

		if (block?.children?.length === 1 && block?.children?.[0]?.text === "") {
			return hardBreak()
		}

		return (
			<View key={block._key} style={blockStyles[styleKey]}>
				<Text style={textStyles[styleKey]}>{children}</Text>
			</View>
		)
	}
}
