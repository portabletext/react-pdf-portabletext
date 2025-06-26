import { mergeComponents, type PortableTextReactComponents } from "@portabletext/react"
import type { PortableTextStyles } from "../types/styles"
import { defaultBlockFactory } from "./block"
import { defaultImageFactory, defaultPageBreakFactory } from "./custom"
import { defaultListFactory, defaultListItemFactory } from "./list"
import { defaultMarksFactory } from "./marks"
import { defaultUnknownBlockStyleFactory, defaultUnknownListFactory, defaultUnknownListItemFactory, defaultUnknownMarkFactory, defaultUnknownTypeFactory, hardBreak } from "./misc"

export const generateStyledDefaultComponentsMap = (styles: PortableTextStyles, baseFontSizePt: number): PortableTextReactComponents => {
	return {
		types: {
			break: defaultPageBreakFactory(),
			image: defaultImageFactory(styles, baseFontSizePt)
		},
		block: {
			normal: defaultBlockFactory(styles, baseFontSizePt),
			blockquote: defaultBlockFactory(styles, baseFontSizePt),
			h1: defaultBlockFactory(styles, baseFontSizePt),
			h2: defaultBlockFactory(styles, baseFontSizePt),
			h3: defaultBlockFactory(styles, baseFontSizePt),
			h4: defaultBlockFactory(styles, baseFontSizePt),
			h5: defaultBlockFactory(styles, baseFontSizePt),
			h6: defaultBlockFactory(styles, baseFontSizePt)
		},
		marks: {
			em: defaultMarksFactory(styles, baseFontSizePt, "em"),
			strong: defaultMarksFactory(styles, baseFontSizePt, "strong"),
			code: defaultMarksFactory(styles, baseFontSizePt, "code"),
			underline: defaultMarksFactory(styles, baseFontSizePt, "underline"),
			"strike-through": defaultMarksFactory(styles, baseFontSizePt, "strike-through"),
			superscript: defaultMarksFactory(styles, baseFontSizePt, "superscript"),
			subscript: defaultMarksFactory(styles, baseFontSizePt, "subscript"),
			link: defaultMarksFactory(styles, baseFontSizePt, "link")
		},
		list: {
			bullet: defaultListFactory(styles, baseFontSizePt),
			number: defaultListFactory(styles, baseFontSizePt)
		},
		listItem: {
			bullet: defaultListItemFactory(styles, baseFontSizePt, "bullet"),
			number: defaultListItemFactory(styles, baseFontSizePt, "number")
		},
		hardBreak: hardBreak,
		unknownType: defaultUnknownTypeFactory(),
		unknownMark: defaultUnknownMarkFactory(),
		unknownList: defaultUnknownListFactory(),
		unknownListItem: defaultUnknownListItemFactory(),
		unknownBlockStyle: defaultUnknownBlockStyleFactory(styles, baseFontSizePt)
	}
}

export const mergeAndStyleComponents = (components: Partial<PortableTextReactComponents> | undefined, styles: PortableTextStyles, baseFontSizePt: number) => {
	const styledDefaultComponentsMap = generateStyledDefaultComponentsMap(styles, baseFontSizePt)

	if (components) {
		return mergeComponents(styledDefaultComponentsMap, components)
	}
	return styledDefaultComponentsMap
}
