import type { TypedObject } from "@portabletext/types"
import { Document, Page, renderToBuffer } from "@react-pdf/renderer"
import { comparePdfToSnapshot } from "pdf-visual-diff"
import { test } from "vitest"
import { PortableText } from "../src"
import type { PortableTextStyles } from "../src/types"
import { test010_basicBulletList, test011_basicNumberedList, test014_nestedLists, test015_allBasicMarks, test017_allDefaultBlockStyles, test063_image } from "./fixtures"
import { snapshotDirectory } from "./utils"

const baseFontSizePt = 16

const document = ({ value, defaultComponentStyles = {} }: { value: TypedObject | TypedObject[]; defaultComponentStyles: PortableTextStyles }) => {
	return (
		<Document>
			<Page size='A4' style={{ padding: "30px", fontFamily: "Source Sans Pro" }}>
				<PortableText value={value} baseFontSizePt={baseFontSizePt} defaultComponentStyles={defaultComponentStyles} />
			</Page>
		</Document>
	)
}

test(`Overriding and extending marks default styles matches snapshot`, async ({ expect }) => {
	const defaultComponentStyles: PortableTextStyles = {
		marks: {
			// Overwrites
			strong: {
				fontWeight: "extrabold"
			},
			// Extends
			em: {
				textTransform: "uppercase"
			},

			// Overwrites
			link: {
				color: "purple"
			},

			// Extends
			underline: {
				textDecorationStyle: "dotted",
				textDecorationColor: "red"
			},
			// Extends
			"strike-through": {
				opacity: 0.5
			},
			// Overwrites
			code: {
				backgroundColor: "rgba(173, 216, 230, 0.3)"
			}
		}
	}

	const component = document({ value: test015_allBasicMarks, defaultComponentStyles })
	const inputBuffer = await renderToBuffer(component)
	const pdfName = "test015_allBasicMarks_StyleOverrides.pdf"
	const comparison = await comparePdfToSnapshot(inputBuffer, snapshotDirectory, pdfName)

	expect(comparison).toBe(true)
})

test(`Overriding and extending block default styles matches snapshot`, async ({ expect }) => {
	const defaultComponentStyles: PortableTextStyles = {
		block: {
			// Extends
			normal: {
				backgroundColor: "lightblue"
			},
			// Extends
			blockquote: {
				backgroundColor: "lightgreen"
			},
			// Overwrites
			h1: {
				backgroundColor: "yellow",
				marginTop: 50,
				marginBottom: 50
			},
			// Extends
			h2: {
				backgroundColor: "pink"
			},
			// Extends
			h3: {
				backgroundColor: "red"
			},
			// Extends
			h4: {
				backgroundColor: "purple"
			},
			// Extends
			h5: {
				backgroundColor: "orange"
			},
			// Extends
			h6: {
				backgroundColor: "lightgrey"
			}
		},
		text: {
			normal: {
				fontSize: 4
			},
			blockquote: {
				fontSize: 4
			},
			h1: {
				fontSize: 32
			},
			h2: {
				fontSize: 30
			},
			h3: {
				fontSize: 28
			},
			h4: {
				fontSize: 26
			},
			h5: {
				fontSize: 24
			},
			h6: {
				fontSize: 22
			}
		}
	}

	const component = document({ value: test017_allDefaultBlockStyles, defaultComponentStyles })
	const inputBuffer = await renderToBuffer(component)
	const pdfName = "test017_allDefaultBlockStyles_StyleOverrides.pdf"
	const comparison = await comparePdfToSnapshot(inputBuffer, snapshotDirectory, pdfName)

	expect(comparison).toBe(true)
})

const listDefaultComponentStyles: PortableTextStyles = {
	list: {
		// Overwrites and extends
		list: {
			marginTop: 100,
			marginBottom: 100,
			backgroundColor: "lightblue"
		},
		// Overwrites and extends
		listDeep: {
			backgroundColor: "lightgreen"
		},
		// Extends
		listItemWrapper: {
			border: "1px solid red"
		},
		// Overwrites
		listItemDecorator: {
			marginRight: 20
		},
		// Overwrites
		listItemNumber: {
			marginRight: 20
		}
	}
}

test(`Overriding and extending bullet list default styles matches snapshot`, async ({ expect }) => {
	const component = document({ value: test010_basicBulletList, defaultComponentStyles: listDefaultComponentStyles })
	const inputBuffer = await renderToBuffer(component)
	const pdfName = "test010_basicBulletList_StyleOverrides.pdf"
	const comparison = await comparePdfToSnapshot(inputBuffer, snapshotDirectory, pdfName)

	expect(comparison).toBe(true)
})

test(`Overriding and extending numbered list default styles matches snapshot`, async ({ expect }) => {
	const component = document({ value: test011_basicNumberedList, defaultComponentStyles: listDefaultComponentStyles })

	const inputBuffer = await renderToBuffer(component)
	const pdfName = "test011_basicNumberedList_StyleOverrides.pdf"
	const comparison = await comparePdfToSnapshot(inputBuffer, snapshotDirectory, pdfName)

	expect(comparison).toBe(true)
})

test(`Overriding and extending nested list default styles matches snapshot`, async ({ expect }) => {
	const component = document({ value: test014_nestedLists, defaultComponentStyles: listDefaultComponentStyles })

	const inputBuffer = await renderToBuffer(component)
	const pdfName = "test014_nestedLists_StyleOverrides.pdf"
	const comparison = await comparePdfToSnapshot(inputBuffer, snapshotDirectory, pdfName)

	expect(comparison).toBe(true)
})

test(`Overriding and extending image default styles matches snapshot`, async ({ expect }) => {
	const defaultComponentStyles: PortableTextStyles = {
		image: {
			padding: 50,
			backgroundColor: "lightblue"
		}
	}
	const component = document({ value: test063_image, defaultComponentStyles })

	const inputBuffer = await renderToBuffer(component)
	const pdfName = "test063_image_StyleOverrides.pdf"
	const comparison = await comparePdfToSnapshot(inputBuffer, snapshotDirectory, pdfName)

	expect(comparison).toBe(true)
})
