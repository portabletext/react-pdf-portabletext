import { PortableText as BasePortableText } from "@portabletext/react"
import type { PortableTextBlock, TypedObject } from "@portabletext/types"
import { flatten } from "flat"
import isNil from "lodash.isnil"
import omitBy from "lodash.omitby"
import type { JSX } from "react"
import { mergeAndStyleComponents } from "./components/defaults"
import type { StyledPortableTextProps } from "./types/styles"
import { Font, View } from '@react-pdf/renderer'

// Register fonts from fontsource packages
// Using the actual font files from @fontsource/courier-prime
Font.register({
	family: 'Courier Prime',
	src: "https://cdn.jsdelivr.net/fontsource/fonts/courier-prime@latest/latin-400-normal.ttf"

})


const checkPropsOverlap = (props: StyledPortableTextProps<any>) => {
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
      
      Paths with a component defined in "components" and paths with a style defined in "defaultComponentStyles" may not overlap. 
      
      You've specified both a component and a style for the following path(s) in those objects: ${overlappingPaths.map((elem) => `"${elem}"`).join(", ")}. 
      
      You may specify both props, as long as there are not matching paths in the two objects resulting in both a component and a style being defined for that path (would lead to confusing behavior). 
      
      For example, you MAY specify a value for "body.h1" in one of those prop objects and a value for "body.h2" in the other, but you may NOT specify both a component and a style for "body.h1".`
			console.error(errorMessage)
			throw new Error(errorMessage)
		} else if (overlappingTypeKeys?.length > 0) {
			const errorMessage = `
      
      Keys with a component defined in "components.types" and keys with a style defined in "defaultComponentStyles" may not overlap. 
      
      You've specified both a component and a style for the following key(s) in those objects: ${overlappingTypeKeys.map((elem) => `"${elem}"`).join(", ")}. 
      
      You may specify both props, as long there are not matching keys in "component.types" and "defaultComponentStyles" resulting in both a component and a style being defined for that same key (would lead to confusing behavior). 
      
      For example, you MAY specify a component for "components.types.body" and a style for "defaultComponentStyles.list", but you may NOT specify an value for both "components.types.body" and "defaultComponentStyles.body".`
			console.error(errorMessage)
			throw new Error(errorMessage)
		}
	}
}

// PortableText expects to be wrapped a Page wrapped in a Document (Page and Document coming from @react-pdf/renderer)
export function PortableText<B extends TypedObject = PortableTextBlock>(props: StyledPortableTextProps<B>): JSX.Element {
	const { baseFontSizePt = 16, defaultComponentStyles = {}, components, ...portableTextProps } = props
	const mergedAndStyledComponents = mergeAndStyleComponents(components, defaultComponentStyles, baseFontSizePt)

	checkPropsOverlap(props)

	return (
		<View style={{ flexDirection: 'column', backgroundColor: 'lightblue' }}>
			<BasePortableText {...portableTextProps} components={mergedAndStyledComponents} />
		</View>
	)
}

export type * from "@portabletext/react"