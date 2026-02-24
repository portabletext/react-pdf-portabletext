import type { TypedObject } from "@portabletext/types"

/**
 * Builds a map of list item `_key`s to their correct index within their
 * list type and level. This handles counter continuation across nesting
 * boundaries, which `@portabletext/react`'s built-in `index` prop does not.
 *
 * Adapted from `@portabletext/editor`'s markdown package.
 */
export function buildListIndexMap(blocks: ReadonlyArray<TypedObject>): Map<string, number> {
	// Maps listItem type → (level → current counter)
	const levelIndexMaps = new Map<string, Map<number, number>>()
	const listIndexMap = new Map<string, number>()

	let previousListItem:
		| {
				listItem: string
				level: number
		  }
		| undefined

	for (const block of blocks) {
		if (!block._key) {
			continue
		}

		const listItem = "listItem" in block && typeof block.listItem === "string" ? block.listItem : undefined
		const level = "level" in block && typeof block.level === "number" ? block.level : undefined

		// Clear state on non-list blocks
		if (listItem === undefined || level === undefined) {
			levelIndexMaps.clear()
			previousListItem = undefined
			continue
		}

		// First list item encountered
		if (!previousListItem) {
			const levelIndexMap = levelIndexMaps.get(listItem) ?? new Map<number, number>()
			levelIndexMap.set(level, 1)
			levelIndexMaps.set(listItem, levelIndexMap)
			listIndexMap.set(block._key, 1)
			previousListItem = { listItem, level }
			continue
		}

		// Going deeper in the same list type: reset counter at the new level
		if (previousListItem.listItem === listItem && previousListItem.level < level) {
			const levelIndexMap = levelIndexMaps.get(listItem) ?? new Map<number, number>()
			levelIndexMap.set(level, 1)
			levelIndexMaps.set(listItem, levelIndexMap)
			listIndexMap.set(block._key, 1)
			previousListItem = { listItem, level }
			continue
		}

		// Reset other list types at current level and deeper
		levelIndexMaps.forEach((levelIndexMap, existingListItem) => {
			if (existingListItem === listItem) {
				return
			}

			const levelsToDelete: number[] = []
			levelIndexMap.forEach((_, existingLevel) => {
				if (existingLevel >= level) {
					levelsToDelete.push(existingLevel)
				}
			})
			levelsToDelete.forEach((levelToDelete) => {
				levelIndexMap.delete(levelToDelete)
			})
		})

		// Increment counter for this list type at this level
		const levelIndexMap = levelIndexMaps.get(listItem) ?? new Map<number, number>()
		const levelCounter = levelIndexMap.get(level) ?? 0
		levelIndexMap.set(level, levelCounter + 1)
		levelIndexMaps.set(listItem, levelIndexMap)
		listIndexMap.set(block._key, levelCounter + 1)
		previousListItem = { listItem, level }
	}

	return listIndexMap
}
