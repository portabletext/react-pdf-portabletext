import merge from "lodash.merge"
import type { PortableTextStyles } from "../types"

export function mergeStyles(defaultStyles: PortableTextStyles, userStyles?: PortableTextStyles) {
	if (!userStyles) return defaultStyles
	return merge({}, defaultStyles, userStyles)
}
