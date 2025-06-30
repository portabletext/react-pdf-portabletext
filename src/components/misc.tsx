import type { PortableTextBlock, PortableTextComponentProps, PortableTextMarkComponentProps, UnknownNodeType } from "@portabletext/react"
import type { ToolkitPortableTextList } from "@portabletext/toolkit"
import type { PortableTextListItemBlock } from "@portabletext/types"
import { Text, View } from "@react-pdf/renderer"
import type { PortableTextStyles } from "../types"
import { defaultBlockFactory } from "./block"
import { defaultListItemFactory } from "./list"

export const hardBreak = () => <Text>{"\n"}</Text>

export const defaultUnknownMarkFactory = () => {
	return (props: PortableTextMarkComponentProps<PortableTextBlock>) => {
		const { children, value: mark, markType } = props
		console.warn(`Unknown mark type "${markType || "undefined"}", please specify a component for it in the \`components.marks\` prop`)

		return <Text key={mark?._key}>{children}</Text>
	}
}

export const defaultUnknownTypeFactory = () => {
	return (props: PortableTextComponentProps<UnknownNodeType>) => {
		const { value } = props
		console.warn(`Unknown block type "${value._type || "undefined"}", specify a component for it in the \`components.types\` prop`)

		return <View />
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

export const defaultUnknownListItemFactory = (baseFontSizePt: number) => {
	return (props: PortableTextComponentProps<PortableTextListItemBlock>) => {
		const { value: block } = props

		console.warn(`Unknown list item style "${block?.listItem || "undefined"}", please specify a component for it in the \`components.list\` prop`)

		const listItemFunction = defaultListItemFactory({}, baseFontSizePt, "bullet")
		return listItemFunction(props)
	}
}
