import type { PortableTextComponentProps, PortableTextReactComponents } from "@portabletext/react"
import { ToolkitPortableTextList } from "@portabletext/toolkit"
import type { PortableTextListItemBlock, TypedObject } from "@portabletext/types"
import { Document, Page, renderToBuffer, Text, View } from "@react-pdf/renderer"
import { comparePdfToSnapshot } from "pdf-visual-diff"
import { test } from "vitest"
import { PortableText } from "../src"
import { test010_basicBulletList, test011_basicNumberedList, test014_nestedLists, test015_allBasicMarks, test017_allDefaultBlockStyles } from "./fixtures"
import { snapshotDirectory } from "./utils"

const baseFontSizePt = 16

const document = ({ value, components }: { value: TypedObject | TypedObject[]; components: Partial<PortableTextReactComponents> }) => {
	return (
		<Document>
			<Page size='A4' style={{ padding: "30px", fontFamily: "Source Sans Pro" }}>
				<PortableText value={value} baseFontSizePt={baseFontSizePt} components={components} />
			</Page>
		</Document>
	)
}

test(`Overriding and extending marks default components matches snapshot`, async ({ expect }) => {
	const components = {
		marks: {
			strong: () => <Text>Strong Override</Text>,
			em: () => <Text>Em Override</Text>,
			link: () => <Text>Link Override</Text>,
			underline: () => <Text>Underline Override</Text>,
			"strike-through": () => <Text>StrikeThrough Override</Text>,
			code: () => <Text>Code Override</Text>
		}
	}

	const component = document({ value: test015_allBasicMarks, components })
	const inputBuffer = await renderToBuffer(component)
	const pdfName = "test015_allBasicMarks_ComponentsOverrides.pdf"
	const comparison = await comparePdfToSnapshot(inputBuffer, snapshotDirectory, pdfName)

	expect(comparison).toBe(true)
})

test(`Overriding and extending block default components matches snapshot`, async ({ expect }) => {
	const components = {
		block: {
			normal: () => <Text>Normal Override</Text>,
			blockquote: () => <Text>Blockquote Override</Text>,
			h1: () => <Text>H1 Override</Text>,
			h2: () => <Text>H2 Override</Text>,
			h3: () => <Text>H3 Override</Text>,
			h4: () => <Text>H4 Override</Text>,
			h5: () => <Text>H5 Override</Text>,
			h6: () => <Text>H6 Override</Text>
		}
	}

	const component = document({ value: test017_allDefaultBlockStyles, components })
	const inputBuffer = await renderToBuffer(component)
	const pdfName = "test017_allDefaultBlockStyles_ComponentsOverrides.pdf"
	const comparison = await comparePdfToSnapshot(inputBuffer, snapshotDirectory, pdfName)

	expect(comparison).toBe(true)
})

const listComponents: Partial<PortableTextReactComponents> = {
	// Overwrites and extends
	list: {
		bullet: ({ children }: PortableTextComponentProps<ToolkitPortableTextList>) => (
			<View style={{ backgroundColor: "lightblue" }}>
				<Text>Bullet List Override:</Text>
				{children}
			</View>
		),
		number: ({ children }: PortableTextComponentProps<ToolkitPortableTextList>) => (
			<View style={{ backgroundColor: "lightblue" }}>
				<Text>Number List Override:</Text>
				{children}
			</View>
		)
	},
	listItem: {
		bullet: ({ children }: PortableTextComponentProps<PortableTextListItemBlock>) => <Text style={{ backgroundColor: "lightgreen" }}>Bullet List Item Override:{children}</Text>,
		number: ({ children }: PortableTextComponentProps<PortableTextListItemBlock>) => <Text style={{ backgroundColor: "lightgreen" }}>Number List Item Override:{children}</Text>
	}
}

test(`Overriding and extending bullet list default components matches snapshot`, async ({ expect }) => {
	const component = document({ value: test010_basicBulletList, components: listComponents })
	const inputBuffer = await renderToBuffer(component)
	const pdfName = "test010_basicBulletList_ComponentsOverrides.pdf"
	const comparison = await comparePdfToSnapshot(inputBuffer, snapshotDirectory, pdfName)

	expect(comparison).toBe(true)
})

test(`Overriding and extending numbered list default components matches snapshot`, async ({ expect }) => {
	const component = document({ value: test011_basicNumberedList, components: listComponents })

	const inputBuffer = await renderToBuffer(component)
	const pdfName = "test011_basicNumberedList_ComponentsOverrides.pdf"
	const comparison = await comparePdfToSnapshot(inputBuffer, snapshotDirectory, pdfName)

	expect(comparison).toBe(true)
})

test(`Overriding and extending nested list default components matches snapshot`, async ({ expect }) => {
	const component = document({ value: test014_nestedLists, components: listComponents })

	const inputBuffer = await renderToBuffer(component)
	const pdfName = "test014_nestedLists_ComponentsOverrides.pdf"
	const comparison = await comparePdfToSnapshot(inputBuffer, snapshotDirectory, pdfName)

	expect(comparison).toBe(true)
})
