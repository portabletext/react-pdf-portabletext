import type { PortableTextComponentProps, PortableTextListComponent } from "@portabletext/react"
import { Text, View } from "@react-pdf/renderer"
import isNil from "lodash.isnil"
import type { PortableTextStyles } from "../types/styles"
import { mergeStyles } from "../utils/mergeStyles"
import { defaultStylesFactory } from "./styles"
import type { ToolkitPortableTextList, ToolkitPortableTextListItem } from "@portabletext/toolkit"
import type { ReactNode } from "react"

export const defaultListFactory = (styles: PortableTextStyles, baseFontSizePt: number) => {
	const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSizePt), styles)

	return (props: PortableTextComponentProps<ToolkitPortableTextList>) => {
		const { children, value: list } = props
		const listStyles = mergedStyles.list || {}
		const listLevel = list.level || 1
		const isDeep = list.level && list.level > 1
		const styleKey = isDeep ? "listDeep" : "list"
		let listStyle = listStyles[styleKey] || {}

		// TODO GET THIS WORKING -- NESTED LISTS DONT WORK CORRECTLY -- STACKING AND NOT INDENTING
		let paddingLeft = {}
		if (isNil(listStyle?.paddingLeft)) {
			paddingLeft = { paddingLeft: baseFontSizePt * listLevel }
		}

		return (
			<View key={list._key} style={[listStyle, paddingLeft]}>
				{children}
			</View>
		)
	}
}

export const defaultListItemFactory = (styles: PortableTextStyles, baseFontSizePt: number, itemType: "bullet" | "number") => {
	const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSizePt), styles)

	return (props: PortableTextComponentProps<ToolkitPortableTextListItem>) => {
		const { children, value: listItem } = props
		const listStyles = mergedStyles?.list

		console.log("CHILDREN: ", children)

		return (
			<View>

				{children?.map((child: ReactNode, index: number) => {
					if (index === 0) {
						switch (itemType) {
							case "bullet":
								return (
									<View key={listItem._key} style={listStyles?.listItemWrapper}>
										{/* <Text style={listStyles?.listItemDecorator}>{bullets[bullets.length % level]}</Text> */}
										<Text style={listStyles?.listItemDecorator}>{'\u00B7'}</Text>
										<Text>{child}</Text>
									</View>
								)
							case "number":
								return (
									<View key={listItem._key} style={listStyles?.listItemWrapper}>
										<Text style={listStyles?.listItemDecorator}>{index + 1}. </Text>
										<Text>{child}</Text>
									</View>
								)
						}
					}

					else {
						return defaultListFactory(styles, baseFontSizePt)(child.props)
					}
				})}


			</View>)

	}
}
