import type { PortableTextComponentProps } from "@portabletext/react"
import type { ToolkitPortableTextList } from "@portabletext/toolkit"
import type { PortableTextListItemBlock } from "@portabletext/types"
import { Text, View } from "@react-pdf/renderer"
import type { PortableTextStyles } from "../types/styles"
import { mergeStyles } from "../utils/mergeStyles"
import { defaultStylesFactory } from "./styles"
// import { hardBreak } from "./misc"

// Helper function to convert number to lowercase roman numerals
const toRomanNumeral = (num: number): string => {
	const romanNumerals = [
		{ value: 50, numeral: "l" },
		{ value: 40, numeral: "xl" },
		{ value: 10, numeral: "x" },
		{ value: 9, numeral: "ix" },
		{ value: 5, numeral: "v" },
		{ value: 4, numeral: "iv" },
		{ value: 1, numeral: "i" }
	]

	let result = ""
	let remaining = num

	for (const { value, numeral } of romanNumerals) {
		while (remaining >= value) {
			result += numeral
			remaining -= value
		}
	}

	return result
}

// Helper function to convert number to alphabetic sequence (a, b, c, ..., z, aa, ab, ...)
const toAlphabetic = (num: number) => {
	let result = ""
	while (num >= 0) {
		result = String.fromCharCode((num % 26) + 97) + result
		num = Math.floor(num / 26) - 1
	}
	return result
}

// Helper function to get the appropriate decorator based on level and item index
const getLevelDecorator = (level: number, itemIndex: number): string => {
	switch (level) {
		case 1:
			// Level 1: numbers (1, 2, 3, 4, etc.)
			return (itemIndex + 1).toString()
		case 2:
			// Level 2: alphabetic (a, b, c, ..., z, aa, ab, ...)
			return toAlphabetic(itemIndex + 1)
		case 3:
			// Level 3: lowercase roman numerals (i, ii, iii, iv, v, ...)
			return toRomanNumeral(itemIndex + 1)
		default:
			// For levels beyond 3, cycle through the patterns
			const cycleLevel = ((level - 1) % 3) + 1
			return getLevelDecorator(cycleLevel, itemIndex)
	}
}

export const defaultListFactory = (styles: PortableTextStyles, baseFontSizePt: number) => {
	const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSizePt), styles)

	return (props: PortableTextComponentProps<ToolkitPortableTextList>) => {
		const { children, value: list } = props
		const listStyles = mergedStyles.list || {}
		const isDeep = list.level && list.level > 1
		const styleKey = isDeep ? "listDeep" : "list"
		let listStyle = listStyles[styleKey] || {}

		return (
			<View key={list._key} style={listStyle}>
				{children}
			</View>
		)
	}
}

const unicodeBullets = [`\u2022`, `\u25E6`, `\u25AA\uFE0E`]

const getDecorator = (level: number, itemType: "bullet" | "number", itemIndex: number = 0) => {
	if (itemType === "bullet") {
		const unicodeCharIndex = (level - 1) % unicodeBullets.length
		const bulletStyles = { fontFamily: "Dejavu Mono" }

		return <Text style={bulletStyles}>{unicodeBullets[unicodeCharIndex]}</Text>
	}

	// For numbered lists, use the level-appropriate decorator
	const decorator = getLevelDecorator(level, itemIndex)
	return <Text>{decorator}. </Text>
}

export const defaultListItemFactory = (styles: PortableTextStyles, baseFontSizePt: number, itemType: "bullet" | "number") => {
	const mergedStyles = mergeStyles(defaultStylesFactory(baseFontSizePt), styles)

	return (props: PortableTextComponentProps<PortableTextListItemBlock>) => {
		const { children, value: listItem, index } = props
		const level = listItem.level || 1
		const bulletIndex = level - 1
		const arrayOfSpaces = Array.from({ length: bulletIndex }, () => "   ")
		const listItemWrapperStyle = mergedStyles?.list?.listItemWrapper || {}
		const key = `${listItem._key}__${level}`

		return (
			<View key={key} style={listItemWrapperStyle}>
				<Text>{level > 1 && "\n"}</Text>
				<Text>{level > 1 && arrayOfSpaces}</Text>
				{getDecorator(level, itemType, level === 2 ? index - 1 : index)}
				<Text>{children}</Text>
			</View>
		)
	}
}
