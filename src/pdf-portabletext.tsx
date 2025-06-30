import { PortableText as BasePortableText, type PortableTextBlock } from "@portabletext/react"
import type { TypedObject } from "@portabletext/types"
import { Font } from "@react-pdf/renderer"
import { flatten } from "flat"
import isNil from "lodash.isnil"
import omitBy from "lodash.omitby"
import type { JSX } from "react"
import { mergeAndStyleComponents } from "./components/defaults"
import type { ReactPdfPortableTextProps } from "./types"

// Register fonts from fontsource packages
// Using the actual font files from @fontsource/courier-prime
Font.register({
	family: "Courier Prime",
	src: "https://cdn.jsdelivr.net/fontsource/fonts/courier-prime@latest/latin-400-normal.ttf"
})

Font.register({
	family: "Dejavu Mono",
	src: "https://cdn.jsdelivr.net/fontsource/fonts/dejavu-mono@latest/latin-400-normal.ttf"
})

const checkPropsOverlap = (props: ReactPdfPortableTextProps<any>) => {
	const { components = {}, defaultComponentStyles = {} } = props
	if (components && defaultComponentStyles) {
		// Check for overlap between the paths to components in "components" and the paths to style definitions in "defaultComponentStyles".
		const defaultStyleKeys = Object.keys(defaultComponentStyles)
		const typeKeys = Object.keys(components?.types || {})
		const overlappingTypeKeys = defaultStyleKeys.filter((key: string) => {
			return typeKeys.indexOf(key) !== -1
		})

		// Check for overlapping paths
		const defaultComponentStylesPaths = Object.keys(omitBy(flatten(defaultComponentStyles, { maxDepth: 2 }) || {}, isNil))
		const componentPaths = Object.keys(omitBy(flatten(components, { maxDepth: 2 }) || {}, isNil))
		const overlappingPaths = defaultComponentStylesPaths.filter((key: string) => {
			return componentPaths.indexOf(key) !== -1
		})

		if (overlappingPaths?.length > 0) {
			const errorMessage = `
      
      OVERLAPPING PROPS: Paths with a component defined in "components" and paths with a style defined in "defaultComponentStyles" may not overlap. 
      
      You've specified both a component and a style for the following path(s) in those objects: ${overlappingPaths.map((elem) => `"${elem}"`).join(", ")}. 
      
      You may specify both props, as long as there are not matching paths in the two objects resulting in both a component and a style being defined for that path (would lead to confusing behavior). 
      
      For example, you MAY specify a value for "block.h1" in one of those prop objects and a value for "block.h2" in the other, but you may NOT specify both a component and a style for "block.h1".`
			console.error(errorMessage)
			throw new Error(errorMessage)
		} else if (overlappingTypeKeys?.length > 0) {
			const errorMessage = `
      
      OVERLAPPING PROPS: Keys with a component defined in "components.types" and keys with a style defined in "defaultComponentStyles" may not overlap. 
      
      You've specified both a component and a style for the following key(s) in those objects: ${overlappingTypeKeys.map((elem) => `"${elem}"`).join(", ")}. 
      
      You may specify both props, as long there are not matching keys in "component.types" and "defaultComponentStyles" resulting in both a component and a style being defined for that same key (would lead to confusing behavior). 
      
      For example, you MAY specify a component for "components.types.block" and a style for "defaultComponentStyles.list", but you may NOT specify an value for both "components.types.block" and "defaultComponentStyles.block".`
			console.error(errorMessage)
			throw new Error(errorMessage)
		}
	}
}


/**
 * PortableText component serializes PortableTextBlock objects to ReactPDF components.
 * PortableText component expects to be wrapped a Page(s) wrapped in a Document (Document and Page are components from \@react-pdf/renderer)
 * @public
 */
export function PortableText<B extends TypedObject = PortableTextBlock>(props: ReactPdfPortableTextProps<B>): JSX.Element {
	const { baseFontSizePt = 12, defaultComponentStyles = {}, components, ...portableTextProps } = props
	const mergedAndStyledComponents = mergeAndStyleComponents(components, defaultComponentStyles, baseFontSizePt)

	checkPropsOverlap(props)

	return <BasePortableText listNestingMode='direct' {...portableTextProps} components={mergedAndStyledComponents} />
}
