import { createContext, useContext } from "react"

const ListIndexMapContext = createContext<Map<string, number>>(new Map())

export const ListIndexMapProvider = ListIndexMapContext.Provider

export function useListIndexMap(): Map<string, number> {
	return useContext(ListIndexMapContext)
}
