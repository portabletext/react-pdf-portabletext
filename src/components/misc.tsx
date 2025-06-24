import type { PortableTextComponentProps, PortableTextListComponent, PortableTextMarkComponentProps, UnknownNodeType } from "@portabletext/react"
import type { PortableTextBlock } from "@portabletext/types"
import { Text, View } from "@react-pdf/renderer"
import type { PortableTextStyles } from "../types/styles"
import { defaultBlockFactory } from "./block"
import type { ToolkitPortableTextList, ToolkitPortableTextListItem } from "@portabletext/toolkit"

export const hardBreak = () => (
	<View>
		<Text>{`\n`}</Text>
	</View>
)

export const defaultUnknownMarkFactory = () => {
	return (props: PortableTextMarkComponentProps<PortableTextBlock>) => {
		const { children, value: mark } = props
		console.warn(`Unknown mark type "${mark?._type || "undefined"}", please specify a component for it in the \`components.marks\` prop`)

		return <Text key={mark?._key}>{children}</Text>
	}
}

export const defaultUnknownTypeFactory = () => {
	return (props: PortableTextComponentProps<UnknownNodeType>) => {
		const { value } = props
		const warning = `Unknown block type "${value._type || "undefined"}", specify a component for it in the \`components.types\` prop`

		return (
			<View style={{ visibility: "hidden" }}>
				<Text>{warning}</Text>
			</View>
		)
	}
}

export const defaultUnknownBlockStyleFactory = (styles: PortableTextStyles, baseFontSizePt: number) => {
	return (props: PortableTextComponentProps<PortableTextBlock>) => {
		const { value: block } = props
		console.warn(`Unknown block style "${block.style || "undefined"}", please specify a component for it in the \`components.block\` prop`)
		props.value.style = "normal"

		return defaultBlockFactory(styles, baseFontSizePt)(props)
	}
}

export const defaultUnknownListFactory = () => {
	return (props: PortableTextComponentProps<ToolkitPortableTextList>) => {
		const { children, value: block } = props

		console.warn(`Unknown list style "${block.listItem || "undefined"}", please specify a component for it in the \`components.list\` prop`)

		return <View key={block._key}>{children}</View>
	}
}

export const defaultUnknownListItemFactory = () => {
	return (props: PortableTextComponentProps<ToolkitPortableTextListItem>) => {
		const { children, value: block } = props

		console.warn(`Unknown list item style "${block?.listItem || "undefined"}", please specify a component for it in the \`components.list\` prop`)

		return <Text>{children}</Text>
	}
}
