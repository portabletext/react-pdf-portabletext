import merge from 'lodash.merge'
import type { CSSProperties } from 'react'

export function mergeStyles<T extends Record<string, CSSProperties>>(
  defaultStyles: T,
  userStyles?: Partial<T>,
): T {
  if (!userStyles) return defaultStyles
  return merge({}, defaultStyles, userStyles)
} 