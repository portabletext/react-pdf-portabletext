import { mergeComponents, type PortableTextReactComponents } from "@portabletext/react"
import type { PortableTextStyles } from "../types"
import { defaultBlockFactory } from "./block"
import { defaultImageFactory, defaultPageBreakFactory } from "./custom"
import { defaultListFactory, defaultListItemFactory } from "./list"
import { defaultMarksFactory } from "./marks"
import { defaultUnknownBlockStyleFactory, defaultUnknownListFactory, defaultUnknownListItemFactory, defaultUnknownMarkFactory, defaultUnknownTypeFactory, hardBreak } from "./misc"

/**
 * This function takes the styles provided as args and merges them into the default styles (in the case of overlapping styles, the user-defined styles will take precedence).
 * It also uses the baseFontSizePt to calculate values for the default styles (e.g. line-height, font-size, etc.).
 * The result of this factory function is a map of default components whose styles are modified/extended using the user-defined styles.
 * That map will be consumed by the mergeAndStyleComponents function.
 * @public
 */
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
			link: defaultMarksFactory(styles, baseFontSizePt, "link"),
			highlight: defaultMarksFactory(styles, baseFontSizePt, "highlight")
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
		unknownListItem: defaultUnknownListItemFactory(baseFontSizePt),
		unknownBlockStyle: defaultUnknownBlockStyleFactory(styles, baseFontSizePt)
	}
}

/**
 * This function takes the styles provided as args and merges them into the default styles (in the case of overlapping styles, the user-defined styles will take precedence).
 * The result of this style-merge is a set of default components whose styles are modified/extended with the user-defined styles.
 * This function then takes the components provided as args and merges them into the default components (in the case of overlapping components, the user-defined components will take precedence).
 * The overall result returned is a components map which includes the user-defined components and any user-defined styles for the default components -- this map is
 * consumed by the PortableText component.
 * @public
 */
export const mergeAndStyleComponents = (components: Partial<PortableTextReactComponents> | undefined, styles: PortableTextStyles, baseFontSizePt: number) => {
	const styledDefaultComponentsMap = generateStyledDefaultComponentsMap(styles, baseFontSizePt)

	if (components) {
		return mergeComponents(styledDefaultComponentsMap, components)
	}
	return styledDefaultComponentsMap
}
