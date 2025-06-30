import { defineConfig } from "vitest/config"

export default defineConfig({
	test: {
		environment: "node",
		environmentMatchGlobs: [
			// Apply jsdom ONLY to this specific test file
			["**/catch-overlapping-props.test.{ts,tsx,js,jsx}", "jsdom"]
		]
	}
})
