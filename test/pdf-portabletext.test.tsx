import React from "react"
import { TypedObject } from "@portabletext/types"
import { Document, Page, renderToBuffer } from "@react-pdf/renderer"
import { comparePdfToSnapshot } from "pdf-visual-diff"
import { PortableText } from "../src"
import * as fixtures from "./fixtures"

await Promise.all(
	Object.entries(fixtures)
		.map(async ([key, fixture]) => {
			const { input } = fixture
			const value = [input] as TypedObject[]
			const component = (
				<Document>
					<Page size="A4" style={{ padding: '16px' }}>
						<PortableText value={value} baseFontSizePt={16} />
					</Page>
				</Document>
			)
			const inputBuffer = await renderToBuffer(component)
			const pdfName = `${key}.pdf`
			console.log("pdfsDirectory: ", __dirname)
			const comparison = await comparePdfToSnapshot(inputBuffer, __dirname, pdfName)
			console.log("comparison: ", comparison)

			// console.log("buffers: ", { inputBuffer, fileBuffer, equal: Buffer.compare(inputBuffer, fileBuffer) === 0 })
		})
)

// test('builds empty tree on empty block', ({expect}) => {
// const {input, output} = fixtures.emptyBlock
// const result = render({value: input})
// expect(result).toEqual(output)
// })
