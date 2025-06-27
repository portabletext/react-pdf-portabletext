import React from "react"
import { test001_emptyBlock } from './fixtures'
import { PortableText, PortableTextReactComponents } from "../src"
import { test } from "vitest"
import { Document, Page, PDFDownloadLink, Text } from "@react-pdf/renderer"
import { render } from "@testing-library/react"
import { TypedObject } from "@portabletext/types"
import { PortableTextStyles } from "../src/types/styles"
import { vi } from "vitest"

vi.mock('@react-pdf/renderer', () => {
	return {
	  Text: ({children}) => <div>{children}</div>,
	  View: ({children}) => <div>{children}</div>,
	  Document: ({children}) => <div>{children}</div>,
	  Page: ({children}) => <div>{children}</div>,
	  Font: {
		register: vi.fn(),
	  },
	};
  });


const document = ({ value, components, defaultComponentStyles }: { value: TypedObject | TypedObject[], components: Partial<PortableTextReactComponents>, defaultComponentStyles: PortableTextStyles }) => {
	return (
		<Document>
			<Page>
				<PortableText value={value} components={components} defaultComponentStyles={defaultComponentStyles} />
			</Page>
		</Document>
	)
}

test(`Providing overlapping props to components and defaultComponentStyles should throw specific error`, async ({ expect }) => {
	const components = {
		block: {
			h1: () => <Text>H1 Override</Text>
		}
	}
	const defaultComponentStyles = {
		block: {
			h1: { color: "red" }
		}
	}
	const component = document({ value: test001_emptyBlock, components, defaultComponentStyles })
	const invalidRender = () => {
		render(component);
	};

	expect(invalidRender).toThrowError(/Paths with a component defined in "components" and paths with a style defined in "defaultComponentStyles" may not overlap/)
})

test(`Providing overlapping props to components.types and defaultComponentStyles should throw specific error`, async ({ expect }) => {	
	const components = {
		types: {
			block: () => <Text>Block Override</Text>
		}
	}
	const defaultComponentStyles = {
		block: {
			h1: { color: "red" }
		}
	}
	const component = document({ value: test001_emptyBlock, components, defaultComponentStyles })


	const invalidRender = () => {
		render(component);
	};

	expect(invalidRender).toThrowError(/Keys with a component defined in "components.types" and keys with a style defined in "defaultComponentStyles" may not overlap/)
})



test(`Providing nonoverlapping props to components and defaultComponentStyles should not error`, async ({ expect }) => {
	const components = {
		block: {
			h1: () => <Text>H1 Override</Text>
		}
	}
	const defaultComponentStyles = {
		block: {
			h2: { color: "red" }
		}
	}
	const component = document({ value: test001_emptyBlock, components, defaultComponentStyles })
	const validRender = () => {
		render(component);
	};

	expect(validRender).not.toThrow()
})

test(`Providing nonoverlapping props to components.types and defaultComponentStyles should not throw error`, async ({ expect }) => {	
	const components = {
		types: {
			list: () => <Text>List Override</Text>
		}
	}
	const defaultComponentStyles = {
		block: {
			h1: { color: "red" }
		}
	}
	const component = document({ value: test001_emptyBlock, components, defaultComponentStyles })

	const validRender = () => {
		render(component);
	};

	expect(validRender).not.toThrow()
})
