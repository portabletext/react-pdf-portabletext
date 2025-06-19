import type { PortableTextComponent, PortableTextComponentProps, ReactPortableTextList } from "@portabletext/react"
import type { PortableTextBlock } from "@portabletext/types"
import { Text, View } from "@react-pdf/renderer"
import type { PortableTextStyles } from "../types/styles"
import { defaultBlockFactory } from "./block"

export const hardBreak = () => (
	<View>
		<Text>{`\n`}</Text>
	</View>
)

export const defaultUnknownMarkFactory: PortableTextComponent<PortableTextBlock> = () => {
	return (props: PortableTextComponentProps<PortableTextBlock>) => {
		const { children, value: mark } = props
		console.warn(`Unknown mark type "${mark?._type || "undefined"}", please specify a component for it in the \`components.marks\` prop`)

		return <Text key={mark._key}>{children}</Text>
	}
}

export const defaultUnknownTypeFactory: PortableTextComponent<PortableTextBlock> = () => {
	return (props: PortableTextComponentProps<PortableTextBlock>) => {
		const { value } = props
		const warning = `Unknown block type "${value._type || "undefined"}", specify a component for it in the \`components.types\` prop`

		console.warn(warning)
		return (
			<View style={{ visibility: "hidden" }} key={value._key}>
				<Text>{warning}</Text>
			</View>
		)
	}
}

export const defaultUnknownBlockStyleFactory: PortableTextComponent<PortableTextBlock> = (styles: PortableTextStyles, baseFontSizePt: number) => {
	return (props: PortableTextComponentProps<PortableTextBlock>) => {
		const { value: block } = props
		console.warn(`Unknown block style "${block.style || "undefined"}", please specify a component for it in the \`components.block\` prop`)
		props.value.style = "normal"

		return defaultBlockFactory(styles, baseFontSizePt)(props)
	}
}

export const defaultUnknownListFactory: PortableTextComponent<ReactPortableTextList> = () => {
	return (props: PortableTextComponentProps<PortableTextBlock>) => {
		const { children, value: block } = props

		console.warn(`Unknown list style "${block.listItem || "undefined"}", please specify a component for it in the \`components.list\` prop`)

		return <View key={block._key}>{children}</View>
	}
}

export const defaultUnknownListItemFactory: PortableTextComponent<PortableTextBlock> = () => {
	return (props: PortableTextComponentProps<PortableTextBlock>) => {
		const { children, value: block } = props

		console.warn(`Unknown list item style "${block?.listItem || "undefined"}", please specify a component for it in the \`components.list\` prop`)

		return <Text>{children}</Text>
	}
}
