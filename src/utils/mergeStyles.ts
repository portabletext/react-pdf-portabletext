import merge from "lodash.merge"
import type { PortableTextStyles } from "../types/styles"

export function mergeStyles(defaultStyles: PortableTextStyles, userStyles?: PortableTextStyles) {
	if (!userStyles) return defaultStyles
	return merge({}, defaultStyles, userStyles)
}
