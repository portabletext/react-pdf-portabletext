import { PortableTextComponentProps, PortableTextReactComponents } from "@portabletext/react"
import type { TypedObject } from "@portabletext/types"
import { Document, Page, renderToBuffer, Text } from "@react-pdf/renderer"
import { comparePdfToSnapshot } from "pdf-visual-diff"
import { test } from "vitest"
import { PortableText } from "../src"
import { defaultStylesFactory } from "../src/components/styles"
import * as fixtures from "./fixtures"
import { snapshotDirectory } from "./utils"

// Define the rating type that extends the base structure
type Rating = {
	_key: string
	_type: "rating"
	type: string
	rating: number
}
type LocalCurrency = {
	_key: string
	_type: "localCurrency"
	sourceCurrency: string
	sourceAmount: number
}
type Button = {
	_key: string
	_type: "button"
	text: string
}
type Code = {
	_key: string
	_type: "code"
	language: string
	code: string
}
type Quote = {
	_key: string
	_type: "quote"
	background: string
	color: string
	children: Array<TypedObject & { text: string }>
}

const baseFontSizePt = 16

const components: Partial<PortableTextReactComponents> = {
	unknownType: ({ children }) => <Text>{children}</Text>,
	types: {
		rating: (props: PortableTextComponentProps<Rating>) => <Text>{props.value.rating}</Text>,
		localCurrency: (props: PortableTextComponentProps<LocalCurrency>) => (
			<Text>
				{" "}
				{props.value.sourceAmount} {props.value.sourceCurrency}{" "}
			</Text>
		),
		button: (props: PortableTextComponentProps<Button>) => <Text style={{ backgroundColor: "lightblue", padding: "5px", borderRadius: "5px", color: "white" }}> {props.value.text} </Text>,
		code: (props: PortableTextComponentProps<Code>) => {
			return (
				<Text style={defaultStylesFactory(baseFontSizePt)?.marks?.code}>
					({props.value.language}){"\n"}
					{"\n"}
					{props.value.code}
				</Text>
			)
		},
		quote: (props: PortableTextComponentProps<Quote>) => {
			return (
				<Text style={{ backgroundColor: props.value.background, color: props.value.color }}>
					{props?.value?.children?.map((child: TypedObject & { text: string }) => {
						return <Text key={child._key}>{child.text}</Text>
					})}
				</Text>
			)
		}
	}
}

const green = "\x1b[32m"
const reset = "\x1b[0m"
console.log("\n\n")
console.log(green, "--------------------------------")
console.log("NOTE: WE EXPECT CERTAIN CONSOLE LOGS ABOUT MISSING TYPE/STYLE/MARK DEFINITIONS:")
console.log('Part of the library functionality is to render sensible defaults (e.g "square" and "disc" listItem types, etc)')
console.log("--------------------------------")
console.log(reset, "\n")

for (const key in fixtures) {
	const input = fixtures[key as keyof typeof fixtures]
	// console.log("Running test: ", key)
	const component = (
		<Document>
			<Page size='A4' style={{ padding: "30px", fontFamily: "Source Sans Pro" }}>
				<PortableText value={input as TypedObject | TypedObject[]} baseFontSizePt={baseFontSizePt} components={components} />
			</Page>
		</Document>
	)
	const inputBuffer = await renderToBuffer(component)
	const pdfName = `${key}.pdf`
	const comparison = await comparePdfToSnapshot(inputBuffer, snapshotDirectory, pdfName)
	test(`Comparison for ${key} returns true`, ({ expect }) => {
		expect(comparison).toBe(true)
	})
}
