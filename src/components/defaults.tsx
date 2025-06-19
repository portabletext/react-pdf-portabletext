import { mergeComponents, type PortableTextReactComponents } from "@portabletext/react"
import type { PortableTextStyles } from "../types/styles"
import { defaultBlockFactory } from "./block"
import { defaultListFactory, defaultListItemFactory } from "./list"
import { defaultMarksFactory } from "./marks"
import { defaultUnknownBlockStyleFactory, defaultUnknownListFactory, defaultUnknownListItemFactory, defaultUnknownMarkFactory, defaultUnknownTypeFactory, hardBreak } from "./misc"

const generateStyledDefaultComponentsMap = (styles: PortableTextStyles, baseFontSize: number) => {
	return {
		types: {},
		block: {
			normal: defaultBlockFactory(styles, baseFontSize),
			blockquote: defaultBlockFactory(styles, baseFontSize),
			h1: defaultBlockFactory(styles, baseFontSize),
			h2: defaultBlockFactory(styles, baseFontSize),
			h3: defaultBlockFactory(styles, baseFontSize),
			h4: defaultBlockFactory(styles, baseFontSize),
			h5: defaultBlockFactory(styles, baseFontSize)
		},
		marks: {
			em: defaultMarksFactory(styles, baseFontSize, "em"),
			strong: defaultMarksFactory(styles, baseFontSize, "strong"),
			code: defaultMarksFactory(styles, baseFontSize, "code"),
			underline: defaultMarksFactory(styles, baseFontSize, "underline"),
			"strike-through": defaultMarksFactory(styles, baseFontSize, "strike-through"),
			superscript: defaultMarksFactory(styles, baseFontSize, "superscript"),
			subscript: defaultMarksFactory(styles, baseFontSize, "subscript"),
			link: defaultMarksFactory(styles, baseFontSize, "link")
		},
		list: defaultListFactory(styles, baseFontSize),
		listItem: {
			bullet: defaultListItemFactory(styles, baseFontSize, "bullet"),
			number: defaultListItemFactory(styles, baseFontSize, "number")
		},
		hardBreak: hardBreak,
		unknownType: defaultUnknownTypeFactory,
		unknownMark: defaultUnknownMarkFactory,
		unknownList: defaultUnknownListFactory,
		unknownListItem: defaultUnknownListItemFactory,
		unknownBlockStyle: defaultUnknownBlockStyleFactory
	}
}

export const mergeAndStyleComponents = (components: Partial<PortableTextReactComponents> | undefined, styles: PortableTextStyles, baseFontSize: number) => {
	const styledDefaultComponentsMap: PortableTextReactComponents = generateStyledDefaultComponentsMap(styles, baseFontSize)

	if (components) {
		return mergeComponents(styledDefaultComponentsMap, components)
	}
	return styledDefaultComponentsMap
}
