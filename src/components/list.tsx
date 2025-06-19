import type { PortableTextBlock, PortableTextComponent, PortableTextComponentProps, PortableTextListComponent } from "@portabletext/react"
import { Text, View } from "@react-pdf/renderer"
import isNil from "lodash.isnil"
import type { PortableTextStyles } from "../types/styles"
import { mergeStyles } from "../utils/mergeStyles"
import { defaultStylesFactory } from "./styles"

export const defaultListFactory: PortableTextComponent<PortableTextListComponent> = (styles: PortableTextStyles, baseFontSizePt: number) => {
	const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSizePt), styles)

	return (props: PortableTextComponentProps<PortableTextListComponent>) => {
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



export const defaultListItemFactory: PortableTextComponent<PortableTextBlock> = (styles: PortableTextStyles, baseFontSizePt: number, itemType: "bullet" | "number") => {
	const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSizePt), styles)

	return (props: PortableTextComponentProps<PortableTextListComponent>) => {
		const { children, value: listItem } = props
		const listStyles = mergedStyles?.list
		const level = listItem.level || 1

		return children.map((child: string | PortableTextListComponent, index: number) => {
			if(index === 0) {
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
				return defaultListFactory(styles, baseFontSizePt, itemType)(child.props)
			}
		})
		
	}
}
