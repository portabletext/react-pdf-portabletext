import { PortableTextComponentProps } from "@portabletext/react"
import { Document, PDFViewer, Page, Text, View } from "@react-pdf/renderer"
import { PortableText } from "../src/pdf-portabletext"
import blocks from "./blocks"

type CalloutBlock = {
	_key: string
	_type: "callout"
	title: string
	message: string
}

const defaultComponentStyles = {
	block: {
		h1: { color: "navy" },
		blockquote: { backgroundColor: "#f0f0f0", padding: 8 }
	}
}

// Currently this example only includes a custom component for the callout block type,
// but it's also possible to fully override the default components for any block type.
const customAndOverrideComponents = {
	types: {
		callout: (props: PortableTextComponentProps<CalloutBlock>) => (
			<View
				style={{
					backgroundColor: "#e8f4f8",
					borderLeftWidth: 4,
					borderLeftColor: "#0ea5e9",
					padding: 8,
					marginVertical: 4
				}}
			>
				<Text style={{ fontWeight: "bold", marginBottom: 4 }}>{props.value.title}</Text>
				<Text>{props.value.message}</Text>
			</View>
		)
	}
}

function App() {
	const dateKey = Date.now()

	return (
		<div
			style={{
				width: "80vw",
				height: "85vh"
			}}
		>
			<h1>PDF Viewer Rendering Serialized Portable Text:</h1>
			<PDFViewer key={dateKey} width='100%' height='100%' style={{}} showToolbar={true}>
				<Document>
					<Page
						size='A4'
						style={{
							padding: "50px",
							fontFamily: "Source Sans Pro"
						}}
					>
						<PortableText value={blocks} baseFontSizePt={12} defaultComponentStyles={defaultComponentStyles} components={customAndOverrideComponents} />
					</Page>
				</Document>
			</PDFViewer>
		</div>
	)
}

export default App
